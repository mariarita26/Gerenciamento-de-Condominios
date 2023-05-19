import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { ResidenteCreateComponent } from "./residente/residente-create/residente-create.component";
import { MatTableModule } from "@angular/material/table";
import { ResidenteReadComponent } from "./residente/residente-read/residente-read.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "app/angular-material/angular-material/angular-material.module";
import { PorteiroCreateComponent } from "./porteiro/porteiro-create/porteiro-create.component";
import { PorteiroReadComponent } from "./porteiro/porteiro-read/porteiro-read.component";
import { VisitaComponent } from './visita/visita.component';
// import { PorteiroModule } from "./porteiro/porteiro.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    // PorteiroModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ResidenteReadComponent,
    ResidenteCreateComponent,
    PorteiroCreateComponent,
    PorteiroReadComponent,
    VisitaComponent
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
