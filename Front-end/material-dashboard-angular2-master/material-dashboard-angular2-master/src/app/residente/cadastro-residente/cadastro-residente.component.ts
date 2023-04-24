import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residente } from 'app/interface/residente';
import { AlertasService } from 'app/service/alertas.service';

@Component({
  selector: 'app-cadastro-residente',
  templateUrl: './cadastro-residente.component.html',
  styleUrls: ['./cadastro-residente.component.scss']
})
export class CadastroResidenteComponent implements OnInit {

  residente: Residente[];

  idResidente = 0;
  formulario = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    // perfil: new FormControl(''),
    // senha: new FormControl(''),
    casa: new FormControl('', Validators.required),
    bloco: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertaService: AlertasService
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    
  }

}
