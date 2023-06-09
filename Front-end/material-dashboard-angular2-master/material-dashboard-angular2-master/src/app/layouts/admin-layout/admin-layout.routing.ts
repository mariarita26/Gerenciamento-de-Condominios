import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../visitante2/cadastro-visitante.component';
import { TableListComponent } from '../../visitante2/listagem-visitante/listagem-visitantes.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ResidenteReadComponent } from 'app/components/residente/residente-read/residente-read.component';
import { ResidenteCreateComponent } from 'app/components/residente/residente-create/residente-create.component';
import { PorteiroCreateComponent } from 'app/components/porteiro/porteiro-create/porteiro-create.component';
import { PorteiroReadComponent } from 'app/components/porteiro/porteiro-read/porteiro-read.component';
import { VisitaComponent } from 'app/components/visita/visita.component';
import { VisitaCreateComponent } from 'app/components/visita-novo/visita-create/visita-create.component';
import { VisitaNovoReadComponent } from 'app/components/visita-novo/visita-read/visita-read.component';
import { EnterComponent } from 'app/components/login/enter/enter.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'visitantes/editar/:id', component: UserProfileComponent},
    // { path: 'residentes',     component: ResidenteReadComponent},
    { path: 'residentes',     component: ResidenteCreateComponent},
    { path: 'residentes/editar/:id', component: ResidenteCreateComponent},
    { path: 'residentes/list', component: ResidenteReadComponent},
    { path: 'porteiros',      component: PorteiroCreateComponent},
    { path: 'porteiros/editar/:id', component: PorteiroCreateComponent},
    { path: 'porteiros/list', component: PorteiroReadComponent},
    // { path: 'visitantes/:nome/visitas', component: VisitaComponent},
    { path: 'visitas/:id/', component: VisitaComponent},
    { path: 'visitas', component: VisitaCreateComponent},
    { path: 'visitas/list', component: VisitaNovoReadComponent},
    // { path: '', component: EnterComponent}
];
