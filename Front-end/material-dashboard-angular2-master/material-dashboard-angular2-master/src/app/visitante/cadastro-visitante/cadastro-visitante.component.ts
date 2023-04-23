import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Visitante } from 'app/interface/visitante';
import { VisitanteService } from 'app/service/visitante.service';

@Component({
  selector: 'app-cadastro-visitante',
  templateUrl: './cadastro-visitante.component.html',
  styleUrls: ['./cadastro-visitante.component.scss']
})
export class CadastroVisitanteComponent implements OnInit {

  // visitantes: Visitante[];

  // idVisitante = 0;
  // formulario = new FormGroup({
  //   nome: new FormControl('', Validators.required),
  //   cpf: new FormControl(''),
  //   telefone: new FormControl(''),
  //   endereco: new FormControl(''),
  //   veiculo: new FormControl(''),
  //   placa: new FormControl('')
  // })


  // displayedColumns = ['id','nome', 'cpf', 'telefone', 'endereco', 'veiculo', 'placa', 'actions'];

  // constructor(
  //   private router: Router,
  //   private visitanteService: VisitanteService,
  //   private route: ActivatedRoute
  // ) { }

  constructor() {}

  ngOnInit(): void {
    
  }

  // ngOnInit(): void {
    
  //   this.idVisitante = Number(this.route.snapshot.paramMap.get('id'));

  //   if (this.idVisitante !== 0){
  //     this.visitanteService.buscarVisitantePorId(this.idVisitante).subscribe((visitante: Visitante) => {
  //       this.formulario.setValue({
  //         nome: visitante.nome,
  //         cpf: visitante.cpf,
  //         telefone: visitante.telefone,
  //         endereco: visitante.endereco,
  //         veiculo: visitante.veiculo,
  //         placa: visitante.placa
  //       });
  //     }, (error) => {
  //       console.log(error);
  //     });
  //   }
  // }

  // enviar() {
  //   const visitante: Visitante = this.formulario.value as Visitante;

  //   if (this.idVisitante) {
  //     visitante.id = this.idVisitante;
  //     this.visitanteService.atualizar(visitante).subscribe(() => {
  //       console.log("atualizado");
  //     })
  //     return;
  //   }

  //   this.visitanteService.inserir(visitante).subscribe(() => {
  //     console.log("visitante cadastrado com sucesso!");
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

}
