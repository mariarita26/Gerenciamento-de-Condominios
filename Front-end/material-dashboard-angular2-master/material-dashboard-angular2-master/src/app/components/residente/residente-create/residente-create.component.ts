import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Residente } from "app/interface/residente";
import { AlertasService } from "app/service/alertas.service";
import { ResidenteService } from "app/service/residente.service";

@Component({
  selector: "app-residente-create",
  templateUrl: "./residente-create.component.html",
  styleUrls: ["./residente-create.component.scss"]
})
export class ResidenteCreateComponent implements OnInit {


  residente: Residente[];

  idResidente = 0;
  formulario = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    bloco: new FormControl('')
  })


  constructor(
    private router: Router,
    private residenteService: ResidenteService,
    private route: ActivatedRoute,
    private alertaService: AlertasService
  ) {}

  ngOnInit(): void {
    this.idResidente = Number(this.route.snapshot.paramMap.get('id'));

    if (this.idResidente !== 0){
      this.residenteService.buscarResidentePorId(this.idResidente).subscribe((residente: Residente) => {
        this.formulario.setValue({
          nome: residente.nome,
          cpf: residente.cpf,
          telefone: residente.telefone,
          endereco: residente.endereco,
          bloco: residente.bloco
        });
      }, (error) => {
        console.log(error);
      });
    }
  }

  enviar() {
    const residente: Residente = this.formulario.value as Residente;

    if (this.idResidente) {
      residente.id = this.idResidente;
      this.residenteService.atualizar(residente).subscribe(() => {
        this.alertaService.alertaSucesso("Residente atualizado");
        this.router.navigate(['residentes/list']);
      })
      return;
    }

    this.residenteService.create(residente).subscribe(() => {
      this.alertaService.alertaSucesso("Residente cadastrado");
      this.router.navigate(['residentes/list']);
    }, (error) => {
      console.log(error);
    });
    
  }
}
