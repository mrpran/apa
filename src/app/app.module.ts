import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { AuthenticationService } from './authentication.service';
import { ApplicationEstateComponent } from './application-estate/application-estate.component';
import { AuthGuard } from './auth.guard';
import { FutureStateComponent } from './future-state/future-state.component';
import { TestComponent } from './test/test.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { KeycloakLoginComponent } from './keycloak-login/keycloak-login.component';

import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';

import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    JwPaginationComponent,
    AppComponent,
    LoginComponent,
    PortfolioDetailsComponent,
    ApplicationEstateComponent,
    FutureStateComponent,
    TestComponent,
    ViewDetailsComponent,
    KeycloakLoginComponent,
    PaginationComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    })
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
