import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitante } from 'app/interface/visitante';
import { VisitanteService } from 'app/service/visitante.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './listagem-visitantes.component.html',
  styleUrls: ['./listagem-visitantes.component.css']
})
export class TableListComponent implements OnInit {

  visitantes: Visitante[];

  displayedColumns = ['id','nome', 'cpf', 'telefone', 'endereco', 'veiculo', 'placa', 'actions'];

  constructor(
    private router: Router,
    private visitanteService: VisitanteService,
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.visitanteService.listar().subscribe((visitantes: Visitante[]) => {
      this.visitantes = visitantes;
    });
  }

}
