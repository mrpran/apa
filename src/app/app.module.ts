import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app.routing';

import { RouterModule, Routes} from '@angular/router';
import { FormsModule ,ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { AuthenticationService } from './authentication.service';
import { ApplicationEstateComponent } from './application-estate/application-estate.component';
import { AuthGuard } from './auth.guard';
import { FutureStateComponent } from './future-state/future-state.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioDetailsComponent,
    ApplicationEstateComponent,
    FutureStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
