import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  username;
  loading = true;
  testID: string;
  sampleData = {};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private authenticationService: AuthenticationService) {
    this.username = localStorage.getItem('username');
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }
  currentUser;
  ngOnInit() {
    this.currentUser =JSON.parse(localStorage.getItem('currentUser'));
    //console.log(this.currentUser.access_token);
    this.authenticationService.getRecords().subscribe(
      records =>{
        this.sampleData = records;
        this.loading = false;
      } ,
      error => { 
        this.router.navigate(['keycloak-login']);
      }

    );
  }


  collapsible(id) {
    if(this.testID==id){
      this.testID = null;
    }
    else{
      this.testID = id;
    }
    
  }

  current_project = {
    "projectId": "",
    "bu": "",
    "vertical": "",
    "account": "",
    "bo": "",
    "al": "",
    "appName": "",
    "asIs": {
      "ageOfApplication": "-",
    "apiGateway": "-",
    "applicationLanguageDependency": "-",
    "applicationDocumentsAvailability": "-",
    "applicationClassification": "-",
    "applicationDescription": "-",
    "applicationPopulation": "-",
    "applicationSupportHours": "-",
    "appServers": "-",
    "appVersion": "-",
    "businessUnitDiscoverySpoc": "-",
    "changeRequestYearly": "-",
    "cicd": "-",
    "cicdTools": "-",
    "database": "-",
    "databaseVersion": "-",
    "globalLocal": "-",
    "incidentRequestYearly": "-",
    "totalRequestYearly": "-",
    "infrastructure": "-",
    "integrationLayer": "-",
    "isApplicationPlannedSunset": "-",
    "isApplicationRationalized": "-",
    "isApplicationTobeOnCloud": "-",
    "isAppShadowIT": "-",
    "isOnSupportPresent": "-",
    "languageBackEnd": "-",
    "languageFrontEnd": "-",
    "languageBEVersion": "-",
    "languageFEVersion": "-",
    "totalLoc": "-",
    "frontEndLoc": "-",
    "dbLoc": "-",
    "backEndLoc": "-",
    "operatingSystem": "-",
    "packageSoftware": "-",
    "platform": "-",
    "process": "-",
    "processTools": "-",
    "region": "-",
    "regionalDiscoverySpoc": "-",
    "releaseCycle": "-",
    "serviceRequestYearly": "-",
    "solutionModel": "-",
    "sunsetDate": "-",
    "comment": "-"
    },
    "toBe": {
      "platform": "",
    "database": "",
    "analytics": "",
    "streaming": "",
    "messaging": "",
    "serverless": "",
    "integration": "",
    "schemaDefinition": "",
    "imageBuild": "",
    "cicd": "",
    "containerOrchestration": "",
    "serviceDiscovery": "",
    "rpc": "",
    "serviceMesh": "",
    "apiGateway": "",
    "hostManagement": "",
    "containerRegistry": "",
    "security": "",
    "keyManagement": "",
    "memoryManagement": "",
    "monitoring": "",
    "logging": "",
    "tracing": "",
    "apiAnalytics": "",
    "alerts": ""
    }
  };

  retriveData(data) {
    this.current_project = data;
  }

  deleteId;
  deleteData(data) {
    this.deleteId = data.projectId;
  }


  editId;
  editData(data){
    this.editId = data.projectId;
    this.router.navigate(['/edit-details', this.editId ]);
  }


  deleteRecord() {
    this.authenticationService.deleteRecord(this.deleteId).subscribe(
      () => {
        this.toast.warning(this.deleteId + " deleted !");
        this.router.navigate(["view-details"]);
      },
      error =>{
        this.toast.error(error);
        console.log(error);
      }
    );
  }

}
