import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  gender = "gender2";
  array;
  portfolioDetailsForm: FormGroup;
  sampleData1 = {
    "gender": "",
    "bu": "",
    "vertical": "",
    "account": "",
    "bo": "",
    "appName": "",
    "wiproAL": ""

  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {


  }

  ngOnInit() {
    var i;
    var gender1;
    var gender2;
    this.array = this.gender.split(",");
    for (i = 0; i < this.array.length; i++) {
      if (this.array[i] == "gender1")
        gender1 = true;
      if (this.array[i] == "gender2")
        gender2 = true;
    }






    this.portfolioDetailsForm = this.formBuilder.group({
      gender1: gender1,
      gender2: gender2,
      bu: ['BFSI'],
      vertical: ['Vertical'],
      account: ['DTCC'],
      bo: ['Dinesh'],
      appName: ['App Moderanization'],
      wiproAL: ['test@wipro.com']
    });
  }
  get f() { return this.portfolioDetailsForm.controls; }

  onSubmit() {
    if (this.f.gender1.value == true) {
      this.sampleData1.gender += "," + "gender1";
    }
    if (this.f.gender2.value == true) {
      this.sampleData1.gender += "," + "gender2";
    }


    this.sampleData1.gender = this.sampleData1.gender.slice(1);

    this.sampleData1.bu = this.f.bu.value;
    this.sampleData1.vertical = this.f.vertical.value;
    this.sampleData1.account = this.f.account.value;
    this.sampleData1.bo = this.f.bo.value;
    this.sampleData1.appName = this.f.appName.value;
    this.sampleData1.wiproAL = this.f.wiproAL.value;

    console.log(this.sampleData1);
    this.sampleData1.gender = "";
  }

}
