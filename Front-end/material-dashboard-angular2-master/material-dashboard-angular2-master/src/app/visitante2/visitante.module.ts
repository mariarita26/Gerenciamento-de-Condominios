import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroVisitanteComponent } from '../visitante/cadastro-visitante/cadastro-visitante.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'app/angular-material/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './cadastro-visitante.component';



@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class VisitanteModule { }
