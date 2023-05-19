import { Component, OnInit } from '@angular/core';
import { Porteiro } from 'app/interface/porteiro';
import { Residente } from 'app/interface/residente';
import { Visita } from 'app/interface/visita';
import { PorteiroService } from 'app/service/porteiro.service';
import { ResidenteService } from 'app/service/residente.service';
import { VisitaService } from 'app/service/visita.service';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.scss']
})
export class VisitaComponent implements OnInit {

  visita: Visita = {
    cadastro: null,
    autorizacao: null,
    visitante: null,
    data: new Date()
  };

  // Listar porteiros
  porteiros: Porteiro[] = []; 
  residentes: Residente[];

  constructor(
    private visitaService: VisitaService,
    private porteiroService: PorteiroService,
    private residenteService: ResidenteService
  ) { }

  ngOnInit(): void {
    this.carregarPorteiros();
    this.carregarResidentes();
  }

  carregarPorteiros() {
    this.porteiroService.getAll().subscribe(
      (porteiros) => {
        this.porteiros = porteiros;
      },
      (error) => {
        console.error('Erro ao carregar porteiros:', error);
      }
    );
  }

  carregarResidentes(){
    this.residenteService.getAll().subscribe(
      (residentes) => {
        this.residentes = residentes;
      }, (error) => {
        console.error('Erro ao carregar residentes:', error);
      }
    )
  }

  registrarVisita() {
    if (!this.visita.cadastro) {
      console.error('Selecione um porteiro');
      return;
    }

    this.visitaService.registrarVisita(this.visita).subscribe(
      () => {
        console.log('ok', this.visita.cadastro);
      },
      (error) => {
        console.error('Erro ao registrar visita:', error);
      }
    );
  }

}
