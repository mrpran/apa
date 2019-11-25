import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ApplicationEstateComponent } from './application-estate/application-estate.component';
import { FutureStateComponent } from './future-state/future-state.component';
import { AuthGuard } from './auth.guard';
import { TestComponent } from './test/test.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { KeycloakLoginComponent } from './keycloak-login/keycloak-login.component';
import { PaginationComponent } from './pagination/pagination.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// , canActivate: [AuthGuard] 
const appRoutes: Routes = [
    { path: '', component: ViewDetailsComponent, canActivate: [AuthGuard] },
    //{ path: 'login', component: LoginComponent },
    { path: 'portfolio-details', component: PortfolioDetailsComponent, canActivate: [AuthGuard] },
    { path: 'application-estate', component: ApplicationEstateComponent , canActivate: [AuthGuard] },
    { path: 'future-state', component: FutureStateComponent , canActivate: [AuthGuard] },
    { path: 'view-details', component: ViewDetailsComponent , canActivate: [AuthGuard] },
    { path: 'edit-details/:editId', component: EditDetailsComponent , canActivate: [AuthGuard] },
    { path: 'test', component: TestComponent , canActivate: [AuthGuard] },
    { path: 'keycloak-login', component: KeycloakLoginComponent  },
    { path: 'pagination', component: PaginationComponent , canActivate: [AuthGuard] },
    { path: '**',  component: PageNotFoundComponent  }
];

export const routing = RouterModule.forRoot(appRoutes);