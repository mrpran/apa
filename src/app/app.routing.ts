import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ApplicationEstateComponent } from './application-estate/application-estate.component';
import { FutureStateComponent } from './future-state/future-state.component';
import { AuthGuard } from './auth.guard';
import { TestComponent } from './test/test.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { KeycloakLoginComponent } from './keycloak-login/keycloak-login.component';

const appRoutes: Routes = [
    { path: '', component: PortfolioDetailsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'portfolio-details', component: PortfolioDetailsComponent, canActivate: [AuthGuard] },
    { path: 'application-estate', component: ApplicationEstateComponent },
    { path: 'future-state', component: FutureStateComponent },
    { path: 'view-details', component: ViewDetailsComponent },
    { path: 'test', component: TestComponent },
    { path: 'keycloak-login', component: KeycloakLoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);