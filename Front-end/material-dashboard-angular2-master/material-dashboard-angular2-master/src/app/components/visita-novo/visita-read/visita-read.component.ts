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
  displayedColumns = ['autorizacao', 'cadastro', 'data', 'id', 'visitanteId']

  constructor(
    private visitaService: VisitaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.visitaService.getAll().subscribe((v: Visita[]) => {
        this.visitas = v;
        console.log(this.visitas);
        
      });
      // this.visitas = [
      //   {
      //     idVisita: 0,
      //     cadastro: "teste",
      //     autorizacao: "Teste",
      //     visitanteId: 0,
      //     data: new Date()
      //   }
      // ]
  }

  navigateToCreate(): void {
    this.router.navigate(['visitas']);
  }

}
