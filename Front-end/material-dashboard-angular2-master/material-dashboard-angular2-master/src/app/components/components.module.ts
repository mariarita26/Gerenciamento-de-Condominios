import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { ResidenteCreateComponent } from "./residente/residente-create/residente-create.component";
import { ResidenteUpdateComponent } from "./residente/residente-update/residente-update.component";
import { ResidenteDeleteComponent } from "./residente/residente-delete/residente-delete.component";
import { MatTableModule } from "@angular/material/table";
import { ResidenteReadComponent } from "./residente/residente-read/residente-read.component";

@NgModule({
  imports: [CommonModule, RouterModule, MatTableModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ResidenteReadComponent,
    ResidenteCreateComponent,
    ResidenteUpdateComponent,
    ResidenteDeleteComponent,
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
