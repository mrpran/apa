import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

  username = "";
  portfolioDetailsForm: FormGroup;
  loading = false;
  sampleData1 = {
    "Bu": "",
    "Vertical": "",
    "Account": "",
    "Bo": "",
    "AppName": "",
    "WiproAL": "",
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.username = JSON.parse(localStorage.getItem('username'));

  }

  ngOnInit() {
    this.portfolioDetailsForm = this.formBuilder.group({
      Bu: ['BU'],
      Vertical: ['Vertical'],
      Account: ['Account'],
      Bo: ['BO'],
      AppName: ['App Moderanization'],
      WiproAL: ['WiproAL']
    });
  }
  get f() { return this.portfolioDetailsForm.controls; }

  onSubmit() {
    this.sampleData1.Bu = this.f.Bu.value;
    this.sampleData1.Vertical = this.f.Vertical.value;
    this.sampleData1.Account = this.f.Account.value;
    this.sampleData1.Bo = this.f.Bo.value;
    this.sampleData1.AppName = this.f.AppName.value;
    this.sampleData1.WiproAL = this.f.WiproAL.value;

    this.authenticationService.save1(this.sampleData1);
    this.router.navigate(['application-estate']);
  }

}
