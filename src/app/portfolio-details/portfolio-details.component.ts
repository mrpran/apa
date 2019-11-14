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


  isOrgAdmin = false;
  username = "";
  portfolioDetailsForm: FormGroup;
  loading = false;
  sampleData1 = {
    "bu": "",
    "vertical": "",
    "account": "",
    "bo": "",
    "appName": "",
    "wiproAL": "",
    "entity": "",
    "asIs": "",
    "toBe": ""

  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.username = localStorage.getItem('username');

  }

  ngOnInit() {
    let role = localStorage.getItem('role').toUpperCase();
    this.portfolioDetailsForm = this.formBuilder.group({
      bu: [role],
      vertical: ['Vertical'],
      account: ['DTCC'],
      bo: ['Dinesh'],
      appName: ['App Moderanization'],
      wiproAL: ['test@wipro.com']
    });
    if (role == "ORG_ADMIN") {
      this.isOrgAdmin = true;
    }
    else {
      this.portfolioDetailsForm.get('bu').disable();
    }
  }
  get f() { return this.portfolioDetailsForm.controls; }

  onSubmit() {
    this.sampleData1.bu = this.f.bu.value;
    this.sampleData1.vertical = this.f.vertical.value;
    this.sampleData1.account = this.f.account.value;
    this.sampleData1.bo = this.f.bo.value;
    this.sampleData1.appName = this.f.appName.value;
    this.sampleData1.wiproAL = this.f.wiproAL.value;

    this.sampleData1.entity = "PortfolioAsIs";

    this.authenticationService.save1(this.sampleData1);
    this.router.navigate(['application-estate']);
  }

}
