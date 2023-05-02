import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Porteiro } from 'app/interface/porteiro';
import { AlertasService } from 'app/service/alertas.service';
import { PorteiroService } from 'app/service/porteiro.service';

@Component({
  selector: 'app-porteiro-create',
  templateUrl: './porteiro-create.component.html',
  styleUrls: ['./porteiro-create.component.scss']
})
export class PorteiroCreateComponent implements OnInit {

  porteiros: Porteiro[];

  idPorteiro = 0;
  formulario = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl(''),
    endereco: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private porteiroService: PorteiroService,
    private route: ActivatedRoute,
    private alertaService: AlertasService
  ) { }

  ngOnInit(): void {
    this.idPorteiro = Number(this.route.snapshot.paramMap.get('id'));

    if (this.idPorteiro !== 0){
      this.porteiroService.buscarPorteiroPorId(this.idPorteiro).subscribe((porteiro: Porteiro) => {
        this.formulario.setValue({
          nome: porteiro.nome,
          cpf: porteiro.cpf,
          telefone: porteiro.telefone,
          endereco: porteiro.endereco,
        });
      }, (error) => {
        console.log(error);
      });
    }
  }

  enviar() {
    const porteiro: Porteiro = this.formulario.value as Porteiro;

    if (this.idPorteiro) {
      porteiro.id = this.idPorteiro;
      this.porteiroService.atualizar(porteiro).subscribe(() => {
        this.alertaService.alertaSucesso("Porteiro atualizado");
        this.router.navigate(['/porteiros/list']);
      })
      return;
    }

    this.porteiroService.create(porteiro).subscribe(() => {
      this.alertaService.alertaSucesso("Porteiro cadastrado");
      this.router.navigate(['/porteiros/list']);
    }, (error) => {
      console.log(error);
    });
    
  }

}
