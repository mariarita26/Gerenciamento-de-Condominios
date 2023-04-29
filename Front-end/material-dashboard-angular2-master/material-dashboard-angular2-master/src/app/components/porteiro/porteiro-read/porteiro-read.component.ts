import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porteiro } from 'app/interface/porteiro';
import { AlertasService } from 'app/service/alertas.service';
import { PorteiroService } from 'app/service/porteiro.service';

@Component({
  selector: 'app-porteiro-read',
  templateUrl: './porteiro-read.component.html',
  styleUrls: ['./porteiro-read.component.scss']
})
export class PorteiroReadComponent implements OnInit {

  porteiros: Porteiro[];

  displayedColumns = ['id','nome', 'cpf', 'telefone', 'endereco', 'actions'];

  constructor(
    private router: Router,
    private porteiroService: PorteiroService,
    private alertaService: AlertasService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.porteiroService.getAll().subscribe((porteiros: Porteiro[]) => {
      this.porteiros = porteiros;
    });
  }

  deletar(id: number) {
    if (id) {
      this.porteiroService.excluirPorteiro(id).subscribe(() => {
        const index = this.porteiros.findIndex( c => c.id === id);
        if (index > -1) {
          this.porteiros.splice(index, 1);
        } 
      })
      this.alertaService.alertaSucesso("Porteiro excluído com sucesso!");
      this.listar();
    } 
  } 

}
