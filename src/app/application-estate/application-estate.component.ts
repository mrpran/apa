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
      ageOfApplication: ['4 years'],
      apiGateway: ['Amazon'],
      applicationLanguageDependency: ['Jackon'],
      applicationDocumentsAvailability: ['yes'],
      applicationClassification: ['This will hold App classification'],
      applicationDescription: ['This app preserves legal Entities'],
      applicationPopulation: ['30000'],
      applicationSupportHours: ['24/7'],
      appServers: ['WebSphere'],
      appVersion: ['9.0'],
      businessUnitDiscoverySpoc: ['test1@wipro.com'],
      changeRequestYearly: ['10'],
      cicd: ['Jenkins'],
      cicdTools: ['yes'],
      database: ['Oracle'],
      databaseVersion: ['8.3'],
      globalLocal: ['Global'],
      incidentRequestYearly: ['30'],
      totalRequestYearly: ['100'],
      infrastructure: ['On-Premise'],
      integrationLayer: ['Mulesoft'],
      isApplicationPlannedSunset: ['yes'],
      isApplicationRationalized: ['yes'],
      isApplicationTobeOnCloud: ['yes'],
      isAppShadowIT: ['yes'],
      isOnSupportPresent: ['no'],
      languageBackEnd: ['NodeJS'],
      languageFrontEnd: ['Angular'],
      languageBEVersion: ['4.5'],
      languageFEVersion: ['5.3'],
      totalLoc: ['20 Thousand'],
      frontEndLoc: ['10 Thousand'],
      dbLoc: ['5 Thousand'],
      backEndLoc: ['5 Thousand'],
      operatingSystem: ['Windows 2012'],
      packageSoftware: ['Java Spring Boot'],
      platform: ['AWS'],
      process: ['Agile'],
      processTools: ['Jira'],
      region: ['South-1'],
      regionalDiscoverySpoc: ['test2Wwipro.com'],
      releaseCycle: ['Monthly'],
      serviceRequestYearly: ['20'],
      solutionModel: ['Inhouse'],
      sunsetDate: ['March 20 2020'],
      comment: ['Give comment here..'],
    });
  }
  get f() { return this.appliationEstateForm.controls; }

  onSubmit() {

    this.asIs.ageOfApplication = this.f.ageOfApplication.value?this.f.ageOfApplication.value :'-';
    this.asIs.apiGateway = this.f.apiGateway.value?this.f.apiGateway.value :'-';
    this.asIs.applicationLanguageDependency = this.f.applicationLanguageDependency.value?this.f.applicationLanguageDependency.value :'-';
    this.asIs.applicationDocumentsAvailability = this.f.applicationDocumentsAvailability.value?this.f.applicationDocumentsAvailability.value :'-';
    this.asIs.applicationClassification = this.f.applicationClassification.value?this.f.applicationClassification.value :'-';
    this.asIs.applicationDescription = this.f.applicationDescription.value?this.f.applicationDescription.value :'-';
    this.asIs.applicationPopulation = this.f.applicationPopulation.value?this.f.applicationPopulation.value :'-';
    this.asIs.applicationSupportHours = this.f.applicationSupportHours.value?this.f.applicationSupportHours.value :'-';
    this.asIs.appServers = this.f.appServers.value?this.f.appServers.value :'-';
    this.asIs.appVersion = this.f.appVersion.value?this.f.appVersion.value :'-';
    this.asIs.businessUnitDiscoverySpoc = this.f.businessUnitDiscoverySpoc.value?this.f.businessUnitDiscoverySpoc.value :'-';
    this.asIs.changeRequestYearly = this.f.changeRequestYearly.value?this.f.changeRequestYearly.value :'-';
    this.asIs.cicd = this.f.cicd.value?this.f.cicd.value :'-';
    this.asIs.cicdTools = this.f.cicdTools.value?this.f.cicdTools.value :'-';
    this.asIs.database = this.f.database.value?this.f.database.value :'-';
    this.asIs.databaseVersion = this.f.databaseVersion.value?this.f.databaseVersion.value :'-';
    this.asIs.globalLocal = this.f.globalLocal.value?this.f.globalLocal.value :'-';
    this.asIs.incidentRequestYearly = this.f.incidentRequestYearly.value?this.f.incidentRequestYearly.value :'-';
    this.asIs.totalRequestYearly = this.f.totalRequestYearly.value?this.f.totalRequestYearly.value :'-';
    this.asIs.infrastructure = this.f.infrastructure.value?this.f.infrastructure.value :'-';
    this.asIs.integrationLayer = this.f.integrationLayer.value?this.f.integrationLayer.value :'-';
    this.asIs.isApplicationPlannedSunset = this.f.isApplicationPlannedSunset.value?this.f.isApplicationPlannedSunset.value :'-';
    this.asIs.isApplicationRationalized = this.f.isApplicationRationalized.value?this.f.isApplicationRationalized.value :'-';
    this.asIs.isApplicationTobeOnCloud = this.f.isApplicationTobeOnCloud.value?this.f.isApplicationTobeOnCloud.value :'-';
    this.asIs.isAppShadowIT = this.f.isAppShadowIT.value?this.f.isAppShadowIT.value :'-';
    this.asIs.isOnSupportPresent = this.f.isOnSupportPresent.value?this.f.isOnSupportPresent.value :'-';
    this.asIs.languageBackEnd = this.f.languageBackEnd.value?this.f.languageBackEnd.value :'-';
    this.asIs.languageFrontEnd = this.f.languageFrontEnd.value?this.f.languageFrontEnd.value :'-';
    this.asIs.languageBEVersion = this.f.languageBEVersion.value?this.f.languageBEVersion.value :'-';
    this.asIs.languageFEVersion = this.f.languageFEVersion.value?this.f.languageFEVersion.value :'-';
    this.asIs.totalLoc = this.f.totalLoc.value?this.f.totalLoc.value :'-';
    this.asIs.frontEndLoc = this.f.frontEndLoc.value?this.f.frontEndLoc.value :'-';
    this.asIs.dbLoc = this.f.dbLoc.value?this.f.dbLoc.value :'-';
    this.asIs.integrationLayer = this.f.integrationLayer.value?this.f.integrationLayer.value :'-';
    this.asIs.backEndLoc = this.f.backEndLoc.value?this.f.backEndLoc.value :'-';
    this.asIs.operatingSystem = this.f.operatingSystem.value?this.f.operatingSystem.value :'-';
    this.asIs.packageSoftware = this.f.packageSoftware.value?this.f.packageSoftware.value :'-';
    this.asIs.platform = this.f.platform.value?this.f.platform.value :'-';
    this.asIs.process = this.f.process.value?this.f.process.value :'-';
    this.asIs.processTools = this.f.processTools.value?this.f.processTools.value :'-';
    this.asIs.region = this.f.region.value?this.f.region.value :'-';
    this.asIs.regionalDiscoverySpoc = this.f.regionalDiscoverySpoc.value?this.f.regionalDiscoverySpoc.value :'-';
    this.asIs.releaseCycle = this.f.releaseCycle.value?this.f.releaseCycle.value :'-';
    this.asIs.serviceRequestYearly = this.f.serviceRequestYearly.value?this.f.serviceRequestYearly.value :'-';
    this.asIs.solutionModel = this.f.solutionModel.value?this.f.solutionModel.value :'-';
    this.asIs.sunsetDate = this.f.sunsetDate.value?this.f.sunsetDate.value :'-';
    this.asIs.integrationLayer = this.f.integrationLayer.value?this.f.integrationLayer.value :'-';
    this.asIs.comment = this.f.comment.value?this.f.comment.value :'-';




    this.authenticationService.save2(this.asIs);
    this.router.navigate(['future-state']);

    // this.authenticationService.sendData(this.asIs).subscribe(
    //   data => {
    //     console.log(data.message);
    //     this.router.navigate(['future-state']);
    //   });
  }
}