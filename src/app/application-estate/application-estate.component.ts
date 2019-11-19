import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-application-estate',
  templateUrl: './application-estate.component.html',
  styleUrls: ['./application-estate.component.css']
})
export class ApplicationEstateComponent implements OnInit {
  username = "";
  appliationEstateForm: FormGroup;
  asIs = {
    "ageOfApplication": "4 years",
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
  };
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private authenticationService: AuthenticationService
  ) {
    this.username = localStorage.getItem('username');
  }
  ngOnInit() {
    if (this.authenticationService.sampleData1 == null) {
      this.toast.error("Please submit portfolio details first ");
      this.router.navigate(['portfolio-details']);
    }
    this.appliationEstateForm = this.formBuilder.group({
      ageOfApplication: ['-'],
      apiGateway: ['-'],
      applicationLanguageDependency: ['-'],
      applicationDocumentsAvailability: ['-'],
      applicationClassification: ['-'],
      applicationDescription: ['-'],
      applicationPopulation: ['-'],
      applicationSupportHours: ['-'],
      appServers: ['-'],
      appVersion: ['-'],
      businessUnitDiscoverySpoc: ['-'],
      changeRequestYearly: ['-'],
      cicd: ['-'],
      cicdTools: ['-'],
      database: ['-'],
      databaseVersion: ['-'],
      globalLocal: ['-'],
      incidentRequestYearly: ['-'],
      totalRequestYearly: ['-'],
      infrastructure: ['-'],
      integrationLayer: ['-'],
      isApplicationPlannedSunset: ['-'],
      isApplicationRationalized: ['-'],
      isApplicationTobeOnCloud: ['-'],
      isAppShadowIT: ['-'],
      isOnSupportPresent: ['-'],
      languageBackEnd: ['-'],
      languageFrontEnd: ['-'],
      languageBEVersion: ['-'],
      languageFEVersion: ['-'],
      totalLoc: ['-'],
      frontEndLoc: ['-'],
      dbLoc: ['-'],
      backEndLoc: ['-'],
      operatingSystem: ['-'],
      packageSoftware: ['-'],
      platform: ['-'],
      process: ['-'],
      processTools: ['-'],
      region: ['-'],
      regionalDiscoverySpoc: ['-'],
      releaseCycle: ['-'],
      serviceRequestYearly: ['-'],
      solutionModel: ['-'],
      sunsetDate: ['-'],
      comment: ['-'],
    });
  }
  get f() { return this.appliationEstateForm.controls; }

  onSubmit() {

    this.asIs.ageOfApplication = this.f.ageOfApplication.value;
    this.asIs.apiGateway = this.f.apiGateway.value;
    this.asIs.applicationLanguageDependency = this.f.applicationLanguageDependency.value;
    this.asIs.applicationDocumentsAvailability = this.f.applicationDocumentsAvailability.value;
    this.asIs.applicationClassification = this.f.applicationClassification.value;
    this.asIs.applicationDescription = this.f.applicationDescription.value;
    this.asIs.applicationPopulation = this.f.applicationPopulation.value;
    this.asIs.applicationSupportHours = this.f.applicationSupportHours.value;
    this.asIs.appServers = this.f.appServers.value;
    this.asIs.appVersion = this.f.appVersion.value;
    this.asIs.businessUnitDiscoverySpoc = this.f.businessUnitDiscoverySpoc.value;
    this.asIs.changeRequestYearly = this.f.changeRequestYearly.value;
    this.asIs.cicd = this.f.cicd.value;
    this.asIs.cicdTools = this.f.cicdTools.value;
    this.asIs.database = this.f.database.value;
    this.asIs.databaseVersion = this.f.databaseVersion.value;
    this.asIs.globalLocal = this.f.globalLocal.value;
    this.asIs.incidentRequestYearly = this.f.incidentRequestYearly.value;
    this.asIs.totalRequestYearly = this.f.totalRequestYearly.value;
    this.asIs.infrastructure = this.f.infrastructure.value;
    this.asIs.integrationLayer = this.f.integrationLayer.value;
    this.asIs.isApplicationPlannedSunset = this.f.isApplicationPlannedSunset.value;
    this.asIs.isApplicationRationalized = this.f.isApplicationRationalized.value;
    this.asIs.isApplicationTobeOnCloud = this.f.isApplicationTobeOnCloud.value;
    this.asIs.isAppShadowIT = this.f.isAppShadowIT.value;
    this.asIs.isOnSupportPresent = this.f.isOnSupportPresent.value;
    this.asIs.languageBackEnd = this.f.languageBackEnd.value;
    this.asIs.languageFrontEnd = this.f.languageFrontEnd.value;
    this.asIs.languageBEVersion = this.f.languageBEVersion.value;
    this.asIs.languageFEVersion = this.f.languageFEVersion.value;
    this.asIs.totalLoc = this.f.totalLoc.value;
    this.asIs.frontEndLoc = this.f.frontEndLoc.value;
    this.asIs.dbLoc = this.f.dbLoc.value;
    this.asIs.integrationLayer = this.f.integrationLayer.value;
    this.asIs.backEndLoc = this.f.backEndLoc.value;
    this.asIs.operatingSystem = this.f.operatingSystem.value;
    this.asIs.packageSoftware = this.f.packageSoftware.value;
    this.asIs.platform = this.f.platform.value;
    this.asIs.process = this.f.process.value;
    this.asIs.processTools = this.f.processTools.value;
    this.asIs.region = this.f.region.value;
    this.asIs.regionalDiscoverySpoc = this.f.regionalDiscoverySpoc.value;
    this.asIs.releaseCycle = this.f.releaseCycle.value;
    this.asIs.serviceRequestYearly = this.f.serviceRequestYearly.value;
    this.asIs.solutionModel = this.f.solutionModel.value;
    this.asIs.sunsetDate = this.f.sunsetDate.value;
    this.asIs.integrationLayer = this.f.integrationLayer.value;
    this.asIs.comment = this.f.comment.value;




    this.authenticationService.save2(this.asIs);
    this.router.navigate(['future-state']);

    // this.authenticationService.sendData(this.asIs).subscribe(
    //   data => {
    //     console.log(data.message);
    //     this.router.navigate(['future-state']);
    //   });
  }
}