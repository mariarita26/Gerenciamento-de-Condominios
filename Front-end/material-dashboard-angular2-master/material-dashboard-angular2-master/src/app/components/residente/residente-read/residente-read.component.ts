import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Residente } from "app/interface/residente";
import { ResidenteService } from "app/service/residente.service";

@Component({
  selector: "app-residente-read",
  templateUrl: "./residente-read.component.html",
  styleUrls: ["./residente-read.component.scss"],
})
export class ResidenteReadComponent implements OnInit {
  residentes: Residente[];

  displayedColumns = ['nome', 'telefone', 'bloco', 'numero', 'action'];

  formulario = new FormGroup({
    nome: new FormControl("", Validators.required),
    cpf: new FormControl("", Validators.required),
    telefone: new FormControl(""),
    endereco: new FormControl(""),
    // perfil: new FormControl(''),
    // senha: new FormControl(''),
    casa: new FormControl("", Validators.required),
    bloco: new FormControl("", Validators.required),
    numero: new FormControl("", Validators.required),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private residenteService: ResidenteService
  ) {}

  ngOnInit(): void {
    this.residenteService.getAll().subscribe((residentes) => {
      this.residentes = residentes;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(["residentes/criar"]);
  }
}
