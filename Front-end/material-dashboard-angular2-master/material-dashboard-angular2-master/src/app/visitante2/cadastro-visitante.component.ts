import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Porteiro } from 'app/interface/porteiro';
import { Residente } from 'app/interface/residente';
import { Visita } from 'app/interface/visita';
import { Visitante } from 'app/interface/visitante';
import { AlertasService } from 'app/service/alertas.service';
import { PorteiroService } from 'app/service/porteiro.service';
import { ResidenteService } from 'app/service/residente.service';
import { VisitaService } from 'app/service/visita.service';
import { VisitanteService } from 'app/service/visitante.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './cadastro-visitante.component.html',
  styleUrls: ['./cadastro-visitante.component.css']
})
export class UserProfileComponent implements OnInit {

  visitantes: Visitante[];
  porteiros: Porteiro[]; 
  residentes: Residente[];

  idVisitante = 0;

  // Formulário do visitante
  formulario = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.min(11)]),
    endereco: new FormControl('', Validators.required),
    veiculo: new FormControl(''),
    placa: new FormControl(''),
  })

  // Formulário da visita
  visita: Visita = {
    cadastro: null,
    autorizacao: null,
    // visitanteId: this.idVisitante,
    visitanteId: null,
    data: new Date()
  };

  constructor(
    private router: Router,
    private visitanteService: VisitanteService,
    private route: ActivatedRoute,
    private alertaService: AlertasService,
    private porteiroService: PorteiroService,
    private visitaService: VisitaService,
    private residenteService: ResidenteService
  ) { }

  ngOnInit(): void {

    this.carregarPorteiros();
    this.carregarResidentes();
    
    this.idVisitante = Number(this.route.snapshot.paramMap.get('id'));
    console.log('verificando',this.idVisitante);

    if (this.idVisitante !== 0){
      this.visitanteService.buscarVisitantePorId(this.idVisitante).subscribe((visitante: Visitante) => {
        this.formulario.setValue({
          nome: visitante.nome,
          cpf: visitante.cpf,
          telefone: visitante.telefone,
          endereco: visitante.endereco,
          veiculo: visitante.veiculo,
          placa: visitante.placa
        });
      }, (error) => {
        console.log(error);
      });
    } 
  } 

  carregarPorteiros() {
    this.porteiroService.getAll().subscribe((porteiros) => {
        this.porteiros = porteiros;
      }, (error) => {
        console.error('Erro ao carregar porteiros:', error);
      }
    );
  }

  carregarResidentes() {
    this.residenteService.getAll().subscribe((residentes) => {
      this.residentes = residentes;
    }, (error) => {
      console.error('Erro ao carregar residentes:', error);
    });
  }

  registrarVisita() {
    // pegar o nome do visitante pelo formulário
    const nome = this.formulario.get('nome').value;
    // this.visita.visitanteId = nome;

    if (!this.visita.cadastro) {
      console.error('Selecione um porteiro', this.visita.cadastro);
      return;
    }
    
    this.visita.visitanteId = this.idVisitante;

    this.visitaService.registrarVisita(this.visita).subscribe(() => 
      {
        console.log('ok', this.visita.cadastro);
      },
      (error) => {
        console.error('Erro ao registrar visita:', error);
      }
    );
  }
  

  enviar() {
    const visitante: Visitante = this.formulario.value as Visitante;

    this.registrarVisita();

    if (this.idVisitante) {
      visitante.id = this.idVisitante;
      this.visitanteService.atualizar(visitante).subscribe(() => {
        this.alertaService.alertaSucesso("Visitante atualizado");
        this.router.navigate(['/table-list']);
      })
      return;
    }

    this.visitanteService.inserir(visitante).subscribe(() => {
      this.alertaService.alertaSucesso("Visitante cadastrado");
      this.router.navigate(['/table-list']);
    }, (error) => {
      console.log(error);
    });

  }

}
