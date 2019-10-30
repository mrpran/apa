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
  sampleData2 = {
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
    this.sampleData2.ApplicationDescription = this.f.ApplicationDescription.value;
    this.sampleData2.ApplicationClassification = this.f.ApplicationClassification.value;
    this.sampleData2.OperatingSystem = this.f.OperatingSystem.value;
    this.sampleData2.PackageSoftware = this.f.PackageSoftware.value;
    this.sampleData2.Platform = this.f.Platform.value;
    this.sampleData2.ApplicationSupportHours = this.f.ApplicationSupportHours.value;
    this.sampleData2.AgeOfApplication = this.f.AgeOfApplication.value;
    this.sampleData2.ApplicactionDocumentsAvailability = this.f.ApplicactionDocumentsAvailability.value;
    this.sampleData2.Region = this.f.Region.value;
    this.sampleData2.GlobalLocal = this.f.GlobalLocal.value;
    this.sampleData2.ApplicationPopulation = this.f.ApplicationPopulation.value;
    this.sampleData2.NumberOfTicketsYearly = this.f.NumberOfTicketsYearly.value;
    this.sampleData2.IncidentRequestYearly = this.f.IncidentRequestYearly.value;
    this.sampleData2.ServiceRequestYearly = this.f.ServiceRequestYearly.value;
    this.sampleData2.ChangeRequestYearly = this.f.ChangeRequestYearly.value;
    this.sampleData2.SolutionModel = this.f.SolutionModel.value;
    this.sampleData2.AplicationLanguageDependecny = this.f.AplicationLanguageDependecny.value;
    this.sampleData2.IsOnSupportPresent = this.f.IsOnSupportPresent.value;
    this.sampleData2.IsApplicationPlannedSunset = this.f.IsApplicationPlannedSunset.value;
    this.sampleData2.IsApplicationTobeOnCloud = this.f.IsApplicationTobeOnCloud.value;
    this.sampleData2.SunsetDate = this.f.SunsetDate.value;
    this.sampleData2.IsApplicationRationalized = this.f.IsApplicationRationalized.value;
    this.sampleData2.IsAppShadowIT = this.f.IsAppShadowIT.value;
    this.sampleData2.BusinessUnitDiscoverySpoc = this.f.BusinessUnitDiscoverySpoc.value;
    this.sampleData2.AppServers = this.f.AppServers.value;
    this.sampleData2.AppVersion = this.f.AppVersion.value;
    this.sampleData2.IntegrationLayer = this.f.IntegrationLayer.value;
    this.sampleData2.ApiGateway = this.f.ApiGateway.value;
    this.sampleData2.Database = this.f.Database.value;
    this.sampleData2.DatabaseVersion = this.f.DatabaseVersion.value;
    this.sampleData2.LinesOfCode = this.f.LinesOfCode.value;
    this.sampleData2.BackEndStack = this.f.BackEndStack.value;
    this.sampleData2.FrontEndStack = this.f.FrontEndStack.value;
    this.sampleData2.DatabaseStack = this.f.DatabaseStack.value;
    this.sampleData2.Infrastructure = this.f.Infrastructure.value;
    this.sampleData2.ReleaseCycle = this.f.ReleaseCycle.value;
    this.sampleData2.Process = this.f.Process.value;
    this.sampleData2.ProcessTools = this.f.ProcessTools.value;
    this.sampleData2.CICDProcess = this.f.CICDProcess.value;
    this.sampleData2.CICD = this.f.CICD.value;
    this.sampleData2.LangageBackEnd = this.f.LangageBackEnd.value;
    this.sampleData2.Version = this.f.Version.value;
    this.sampleData2.LangaugeFrontEnd = this.f.LangaugeFrontEnd.value;
    this.sampleData2.LangaugeVersion = this.f.LangaugeVersion.value;
    this.sampleData2.RegionalDiscoverySpoc = this.f.RegionalDiscoverySpoc.value;

    this.authenticationService.sendData(this.sampleData2).subscribe(
      data => {
        console.log(data.message);
        this.router.navigate(['future-state']);
      });
  }
}