import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitante } from 'app/interface/visitante';
import { AlertasService } from 'app/service/alertas.service';
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
    private alertaService: AlertasService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.visitanteService.listar().subscribe((visitantes: Visitante[]) => {
      this.visitantes = visitantes;
    });
  }

  deletar(id: number) {
    if (id) {
      this.visitanteService.excluirVisitante(id).subscribe(() => {
        const index = this.visitantes.findIndex( c => c.id === id);
        if (index > -1) {
          this.visitantes.splice(index, 1);
        } 
      })
      this.alertaService.alertaSucesso("Visitante excluído com sucesso!");
      this.listar();
    } 
  } 
}
