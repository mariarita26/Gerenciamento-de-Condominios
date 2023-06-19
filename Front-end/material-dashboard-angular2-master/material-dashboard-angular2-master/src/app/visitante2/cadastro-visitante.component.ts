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
    
    this.idVisitante = Number(this.route.snapshot.paramMap.get('id'));
    console.log('verificando',this.idVisitante);

    // if (this.idVisitante !== 0){
    //   this.visitanteService.buscarVisitantePorId(this.idVisitante).subscribe((visitante: Visitante) => {
    //     this.formulario.setValue({
    //       nome: visitante.nome,
    //       cpf: visitante.cpf,
    //       telefone: visitante.telefone,
    //       endereco: visitante.endereco,
    //       veiculo: visitante.veiculo,
    //       placa: visitante.placa
    //     });
    //   }, (error) => {
    //     console.log(error);
    //   });
    // } 
  } 

  enviar() {
    const visitante: Visitante = this.formulario.value as Visitante;


    // if (this.idVisitante) {
    //   visitante.id = this.idVisitante;
    //   this.visitanteService.atualizar(visitante).subscribe(() => {
    //     this.alertaService.alertaSucesso("Visitante atualizado");
    //     this.router.navigate(['/table-list']);
    //   })
    //   return;
    // }

    this.visitanteService.inserir(visitante).subscribe(() => {
      this.alertaService.alertaSucesso("Visitante cadastrado");
      this.router.navigate(['/table-list']);
    }, (error) => {
      console.log(error);
    });

  }

}
