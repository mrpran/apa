import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
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
    "ApplicationDescription": "This app preserves legal Entities",
    "ApplicationClassification": "This will hold App classification",
    "OperatingSystem": "Windows 2012",
    "PackageSoftware": "Java Spring Boot",
    "Platform": "AWS",
    "ApplicationSupportHours": "24/7",
    "AgeOfApplication": "4 years",
    "ApplicactionDocumentsAvailability": "yes",
    "Region": "South-1",
    "GlobalLocal": "Global",
    "ApplicationPopulation": "30000",
    "NumberOfTicketsYearly": "100",
    "IncidentRequestYearly": "30",
    "ServiceRequestYearly": "20",
    "ChangeRequestYearly": "10",
    "SolutionModel": "Inhouse",
    "AplicationLanguageDependecny": "Jackon",
    "IsOnSupportPresent": "yes",
    "IsApplicationPlannedSunset": "no",
    "IsApplicationTobeOnCloud": "no",
    "SunsetDate": "March 20 2020",
    "IsApplicationRationalized": "yes",
    "IsAppShadowIT": "no",
    "BusinessUnitDiscoverySpoc": "test1@wipro.com",
    "AppServers": "WebSphere",
    "AppVersion": "9.0",
    "IntegrationLayer": "9.0",
    "ApiGateway": "9.0",
    "Database": "Oracle",
    "DatabaseVersion": "8.3",
    "LinesOfCode": "20 Thousand",
    "BackEndStack": "Oracle",
    "FrontEndStack": "Node JS",
    "DatabaseStack": "...",
    "Infrastructure": "On-Premise",
    "ReleaseCycle": "Monthly",
    "Process": "Agile",
    "ProcessTools": "Jira",
    "CICDProcess": "yes",
    "CICD": "Jenkins",
    "LangageBackEnd": "PL/SQL",
    "Version": "3.0",
    "LangaugeFrontEnd": "Angular",
    "LangaugeVersion": "8.0",
    "RegionalDiscoverySpoc": "test2Wwipro.com"
  };
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.username = JSON.parse(localStorage.getItem('username'));
  }
  ngOnInit() {
    this.appliationEstateForm = this.formBuilder.group({
      ApplicationDescription: ['This app preserves legal Entities'],
      ApplicationClassification: ['This will hold App classification'],
      OperatingSystem: ['Windows 2012'],
      PackageSoftware: ['Java Spring Boot'],
      Platform: ['AWS'],
      ApplicationSupportHours: ['24/7'],
      AgeOfApplication: ['4 years'],
      ApplicactionDocumentsAvailability: ['yes'],
      Region: ['South-1'],
      GlobalLocal: ['Global'],
      ApplicationPopulation: ['30000'],
      NumberOfTicketsYearly: ['100'],
      IncidentRequestYearly: ['30'],
      ServiceRequestYearly: ['20'],
      ChangeRequestYearly: ['10'],
      SolutionModel: ['Inhouse'],
      AplicationLanguageDependecny: ['Jackon'],
      IsOnSupportPresent: ['yes'],
      IsApplicationPlannedSunset: ['no'],
      IsApplicationTobeOnCloud: ['no'],
      SunsetDate: ['March 20 2020'],
      IsApplicationRationalized: ['yes'],
      IsAppShadowIT: ['no'],
      BusinessUnitDiscoverySpoc: ['test1@wipro.com'],
      AppServers: ['WebSphere'],
      AppVersion: ['9.0'],
      IntegrationLayer: ['9.0'],
      ApiGateway: ['9.0'],
      Database: ['Oracle'],
      DatabaseVersion: ['8.3'],
      LinesOfCode: ['20 Thousand'],
      BackEndStack: ['Oracle'],
      FrontEndStack: ['Node JS'],
      DatabaseStack: ['...'],
      Infrastructure: ['On-Premise'],
      ReleaseCycle: ['Monthly'],
      Process: ['Agile'],
      ProcessTools: ['Jira'],
      CICDProcess: ['yes'],
      CICD: ['Jenkins'],
      LangageBackEnd: ['PL/SQL'],
      Version: ['3.0'],
      LangaugeFrontEnd: ['Angular'],
      LangaugeVersion: ['8.0'],
      RegionalDiscoverySpoc: ['test2Wwipro.com']
    });
  }
  get f() { return this.appliationEstateForm.controls; }
  onSubmit() {
    this.asIs.ApplicationDescription = this.f.ApplicationDescription.value;
    this.asIs.ApplicationClassification = this.f.ApplicationClassification.value;
    this.asIs.OperatingSystem = this.f.OperatingSystem.value;
    this.asIs.PackageSoftware = this.f.PackageSoftware.value;
    this.asIs.Platform = this.f.Platform.value;
    this.asIs.ApplicationSupportHours = this.f.ApplicationSupportHours.value;
    this.asIs.AgeOfApplication = this.f.AgeOfApplication.value;
    this.asIs.ApplicactionDocumentsAvailability = this.f.ApplicactionDocumentsAvailability.value;
    this.asIs.Region = this.f.Region.value;
    this.asIs.GlobalLocal = this.f.GlobalLocal.value;
    this.asIs.ApplicationPopulation = this.f.ApplicationPopulation.value;
    this.asIs.NumberOfTicketsYearly = this.f.NumberOfTicketsYearly.value;
    this.asIs.IncidentRequestYearly = this.f.IncidentRequestYearly.value;
    this.asIs.ServiceRequestYearly = this.f.ServiceRequestYearly.value;
    this.asIs.ChangeRequestYearly = this.f.ChangeRequestYearly.value;
    this.asIs.SolutionModel = this.f.SolutionModel.value;
    this.asIs.AplicationLanguageDependecny = this.f.AplicationLanguageDependecny.value;
    this.asIs.IsOnSupportPresent = this.f.IsOnSupportPresent.value;
    this.asIs.IsApplicationPlannedSunset = this.f.IsApplicationPlannedSunset.value;
    this.asIs.IsApplicationTobeOnCloud = this.f.IsApplicationTobeOnCloud.value;
    this.asIs.SunsetDate = this.f.SunsetDate.value;
    this.asIs.IsApplicationRationalized = this.f.IsApplicationRationalized.value;
    this.asIs.IsAppShadowIT = this.f.IsAppShadowIT.value;
    this.asIs.BusinessUnitDiscoverySpoc = this.f.BusinessUnitDiscoverySpoc.value;
    this.asIs.AppServers = this.f.AppServers.value;
    this.asIs.AppVersion = this.f.AppVersion.value;
    this.asIs.IntegrationLayer = this.f.IntegrationLayer.value;
    this.asIs.ApiGateway = this.f.ApiGateway.value;
    this.asIs.Database = this.f.Database.value;
    this.asIs.DatabaseVersion = this.f.DatabaseVersion.value;
    this.asIs.LinesOfCode = this.f.LinesOfCode.value;
    this.asIs.BackEndStack = this.f.BackEndStack.value;
    this.asIs.FrontEndStack = this.f.FrontEndStack.value;
    this.asIs.DatabaseStack = this.f.DatabaseStack.value;
    this.asIs.Infrastructure = this.f.Infrastructure.value;
    this.asIs.ReleaseCycle = this.f.ReleaseCycle.value;
    this.asIs.Process = this.f.Process.value;
    this.asIs.ProcessTools = this.f.ProcessTools.value;
    this.asIs.CICDProcess = this.f.CICDProcess.value;
    this.asIs.CICD = this.f.CICD.value;
    this.asIs.LangageBackEnd = this.f.LangageBackEnd.value;
    this.asIs.Version = this.f.Version.value;
    this.asIs.LangaugeFrontEnd = this.f.LangaugeFrontEnd.value;
    this.asIs.LangaugeVersion = this.f.LangaugeVersion.value;
    this.asIs.RegionalDiscoverySpoc = this.f.RegionalDiscoverySpoc.value;

    this.authenticationService.save2(this.asIs);
    this.router.navigate(['future-state']);

    // this.authenticationService.sendData(this.asIs).subscribe(
    //   data => {
    //     console.log(data.message);
    //     this.router.navigate(['future-state']);
    //   });
  }
}