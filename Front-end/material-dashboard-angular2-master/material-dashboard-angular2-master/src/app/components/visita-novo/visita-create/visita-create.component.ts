import { PorteiroService } from './../../../service/porteiro.service';
import { Porteiro } from './../../../interface/porteiro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visita } from 'app/interface/visita';
import { VisitaService } from 'app/service/visita.service';
import { Residente } from 'app/interface/residente';
import { ResidenteService } from 'app/service/residente.service';
import { Visitante } from 'app/interface/visitante';
import { VisitanteService } from 'app/service/visitante.service';

@Component({
  selector: 'app-visita-create',
  templateUrl: './visita-create.component.html',
  styleUrls: ['./visita-create.component.scss']
})
export class VisitaCreateComponent implements OnInit {

  porteiros: Porteiro[];
  residentes: Residente[];
  visitantes: Visitante[];

  visita: Visita = {
    cadastro: null,
    autorizacao: null,
    visitanteId: null,
    data: new Date(),
  }

  constructor(
    private visitaService: VisitaService,
    private router: Router,
    private porteiroService: PorteiroService,
    private residenteService: ResidenteService,
    private visitanteService: VisitanteService,
  ) { }

  ngOnInit(): void {
    this.carregarPorteiros();
    this.carregarResidentes();
    this.carregarVisitantes();
  }

  criarVisita(): void {
    this.visitaService.registrarVisita(this.visita).subscribe(() => {
      this.router.navigate(['/visitas/list']);
    })
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

  carregarVisitantes() {
    this.visitanteService.listar().subscribe((visitantes) => {
      this.visitantes = visitantes;
    }, (error) => {
      console.error('Erro ao carregar visitantes:', error);
    });
  }

  
}
