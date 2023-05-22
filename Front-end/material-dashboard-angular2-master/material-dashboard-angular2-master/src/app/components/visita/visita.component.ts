import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Visita } from 'app/interface/visita';
import { Visitante } from 'app/interface/visitante';
import { PorteiroService } from 'app/service/porteiro.service';
import { ResidenteService } from 'app/service/residente.service';
import { VisitaService } from 'app/service/visita.service';
import { VisitanteService } from 'app/service/visitante.service';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.scss']
})
export class VisitaComponent implements OnInit {

  visitantes: Visitante[];
  visitas: Visita[];
  visitanteId: number;
 
  constructor(
    private visitaService: VisitaService,
    private visitanteService: VisitanteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.visitanteId = Number(params.get('id'));
    //   this.carregarVisitas();
    // });
    // this.carregarVisitantes();
    const idPorteiro = this.route.snapshot.paramMap.get('idPorteiro');
    this.carregarRegistros(idPorteiro);
  }

  carregarRegistros(idPorteiro: string) {
    this.visitaService.getVisitasPorPorteiro(idPorteiro).subscribe((visitas: Visita[]) => {
      this.visitas = visitas;
    });
  }

  carregarVisitantes() {
    this.visitanteService.listar().subscribe(visitantes => this.visitantes = visitantes);
  }

  carregarVisitas() {
    this.visitaService.getVisitasByVisitanteId(this.visitanteId).subscribe(
      visitas => {
        this.visitas = visitas;
        console.log(this.visitas); // Exibir no console as visitas do visitante
      },
      error => {
        console.error('Erro ao carregar visitas:', error);
      }
    );
  }


  // exibirVisita(visitante: Visitante) {
  //   // Lógica para exibir a visita correspondente ao visitante clicado
  //   const visita = this.visitas.find(v => v.visitanteId === visitante);
  //   if (visita) {
  //     console.log('Autorizador:', visita.autorizacao);
  //     console.log('Cadastro:', visita.cadastro);
  //     console.log('Horário da visita:', visita.data);
  //   } else {
  //     console.log('Visita não encontrada');
  //   }
  // }
  

}
