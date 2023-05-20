import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visita } from 'app/interface/visita';
import { VisitaService } from 'app/service/visita.service';

@Component({
  selector: 'app-visita-read',
  templateUrl: './visita-read.component.html',
  styleUrls: ['./visita-read.component.scss']
})
export class VisitaReadComponent implements OnInit {

  visitas: Visita[];
  displayedColumns = ['idVisita', 'cadastro', 'autorizacao', 'visitanteId', 'data']

  constructor(
    private visitaService: VisitaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.visitaService.getAll().subscribe((visitas: Visita[]) => {
      this.visitas = visitas;
      console.log(this.visitas);
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['visitas']);
  }

}
