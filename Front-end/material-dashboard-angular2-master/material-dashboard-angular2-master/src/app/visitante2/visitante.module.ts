import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'app/angular-material/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './cadastro-visitante.component';
import { TableListComponent } from './listagem-visitante/listagem-visitantes.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class VisitanteModule { }
