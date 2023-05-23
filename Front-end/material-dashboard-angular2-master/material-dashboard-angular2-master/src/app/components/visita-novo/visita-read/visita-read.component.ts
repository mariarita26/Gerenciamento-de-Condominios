import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visita } from 'app/interface/visita';
import { Visitante } from 'app/interface/visitante';
import { VisitaService } from 'app/service/visita.service';
import { VisitanteService } from 'app/service/visitante.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-visita-read',
  templateUrl: './visita-read.component.html',
  styleUrls: ['./visita-read.component.scss']
})
export class VisitaNovoReadComponent implements OnInit {

  visitas: Visita[];
  visitantes: Visitante[];
  displayedColumns = ['autorizacao', 'cadastro', 'data', 'id', 'visitanteId']

  constructor(
    private visitaService: VisitaService,
    private visitanteService: VisitanteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.visitaService.getAll().subscribe((visitas: Visita[]) => {
      this.visitas = visitas;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['visitas']);
  }



  getNomeVisitante(visitanteId: number): Observable<string> {
    return this.visitanteService.buscarVisitantePorId(visitanteId).pipe(
      map((visitante: Visitante) => {
        return visitante ? visitante.nome : '';
      })
    );
  }
  

}
