import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { typeofExpr } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-keycloak-login',
  templateUrl: './keycloak-login.component.html',
  styleUrls: ['./keycloak-login.component.css']
})
export class KeycloakLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [],
      password: []
    });
    this.authenticationService.logout();
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.keycloak_login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('username', this.f.username.value );
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.router.navigate(['portfolio-details']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.error_description;
          this.loading = false;
        });
  }
}
