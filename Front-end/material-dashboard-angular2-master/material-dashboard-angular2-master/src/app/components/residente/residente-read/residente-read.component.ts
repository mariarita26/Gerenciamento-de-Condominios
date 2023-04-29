import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Residente } from "app/interface/residente";
import { AlertasService } from "app/service/alertas.service";
import { ResidenteService } from "app/service/residente.service";

@Component({
  selector: "app-residente-read",
  templateUrl: "./residente-read.component.html",
  styleUrls: ["./residente-read.component.scss"],
})
export class ResidenteReadComponent implements OnInit {
  residentes: Residente[];

  displayedColumns = ['id','nome', 'cpf', 'telefone', 'endereco', 'casa', 'bloco', 'numero'];

  constructor(
    private router: Router,
    private residenteService: ResidenteService,
    private alertaService: AlertasService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.residenteService.getAll().subscribe((residentes: Residente[]) => {
      this.residentes = residentes;
    });
  }

  deletar(id: number) {
    if (id) {
      this.residenteService.excluirResidente(id).subscribe(() => {
        const index = this.residentes.findIndex( c => c.id === id);
        if (index > -1) {
          this.residentes.splice(index, 1);
        } 
      })
      this.alertaService.alertaSucesso("Residente excluído com sucesso!");
      this.listar();
    } 
  } 
}
