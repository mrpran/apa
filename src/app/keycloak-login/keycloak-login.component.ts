import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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
          localStorage.setItem('username', this.f.username.value );
          localStorage.setItem('currentUser', JSON.stringify(data));
          
          if(this.f.username.value == "userbfsi") localStorage.setItem('role', "bfsi" );
          if(this.f.username.value == "userenu") localStorage.setItem('role', "enu" );
          if(this.f.username.value == "usergmt") localStorage.setItem('role', "gmt" );
          if(this.f.username.value == "userhls") localStorage.setItem('role', "hls" );
          if(this.f.username.value == "usermfg") localStorage.setItem('role', "mfg" );
          if(this.f.username.value == "userpes") localStorage.setItem('role', "pes" );
          if(this.f.username.value == "userrctg") localStorage.setItem('role', "rctg" );
          if(this.f.username.value == "orgadmin") localStorage.setItem('role', "ORG_ADMIN" );
          
          this.router.navigate(['view-details']);



        },
        error => {
          console.log(error);
          this.toast.error(error.error.error_description ? error.error.error_description : error.statusText);
          this.loading = false;
        });
  }
}
