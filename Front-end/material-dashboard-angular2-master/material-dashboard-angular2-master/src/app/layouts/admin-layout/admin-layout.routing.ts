import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../visitante2/cadastro-visitante.component';
import { TableListComponent } from '../../visitante2/listagem-visitante/listagem-visitantes.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ResidenteReadComponent } from 'app/components/residente/residente-read/residente-read.component';
import { ResidenteCreateComponent } from 'app/components/residente/residente-create/residente-create.component';
import { PorteiroCreateComponent } from 'app/components/porteiro/porteiro-create/porteiro-create.component';
import { PorteiroReadComponent } from 'app/components/porteiro/porteiro-read/porteiro-read.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'visitantes/editar/:id', component: UserProfileComponent},
    // { path: 'residentes',     component: ResidenteReadComponent},
    { path: 'residentes',     component: ResidenteCreateComponent},
    { path: 'residentes/editar/:id', component: ResidenteCreateComponent},
    { path: 'residentes/list', component: ResidenteReadComponent},
    { path: 'porteiros',      component: PorteiroCreateComponent},
    { path: 'porteiros/editar/:id', component: PorteiroCreateComponent},
    { path: 'porteiros/list', component: PorteiroReadComponent}
];
