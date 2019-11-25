import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';
import Portfolio from "../model";

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {


  hideFuture = true;

  showCurrent() {
    window.scroll(0, 0);
    this.hideFuture = !this.hideFuture;
  }

  username;
  editId;
  project: Portfolio;


  toBeSelected: any;
  asIsSelected =
    {
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

  platformOther = "";
  databaseOther = "";
  analyticsOther = "";
  streamingOther = "";
  messagingOther = "";
  serverlessOther = "";
  integrationOther = "";
  schemaDefinitionOther = "";
  imageBuildOther = "";
  cicdOther = "";
  containerOrchestrationOther = "";
  serviceDiscoveryOther = "";
  rpcOther = "";
  serviceMeshOther = "";
  apiGatewayOther = "";
  hostManagementOther = "";
  containerRegistryOther = "";
  securityOther = "";
  keyManagementOther = "";
  memoryManagementOther = "";
  monitoringOther = "";
  loggingOther = "";
  tracingOther = "";
  apiAnalyticsOther = "";
  alertsOther = "";



  platformList: string[];
  platformSelected = [];
  handlePlatform(value, isChecked) {
    if (isChecked == true) {
      this.platformSelected.includes(value) ? {} : this.platformSelected.push(value);
    }
    else {
      this.platformSelected.includes(value) ? this.platformSelected.splice(this.platformSelected.indexOf(value), 1) : {};
    }
  }


  databaseList: string[];
  databaseSelected = [];
  handleDatabase(value, isChecked) {
    if (isChecked == true) {
      this.databaseSelected.includes(value) ? {} : this.databaseSelected.push(value);
    }
    else {
      this.databaseSelected.includes(value) ? this.databaseSelected.splice(this.databaseSelected.indexOf(value), 1) : {};
    }
  }
  analyticsList: string[];
  analyticsSelected = [];
  handleAnalytics(value, isChecked) {
    if (isChecked == true) {
      this.analyticsSelected.includes(value) ? {} : this.analyticsSelected.push(value);
    }
    else {
      this.analyticsSelected.includes(value) ? this.analyticsSelected.splice(this.analyticsSelected.indexOf(value), 1) : {};
    }
  }
  streamingList: string[];
  streamingSelected = [];
  handleStreaming(value, isChecked) {
    if (isChecked == true) {
      this.streamingSelected.includes(value) ? {} : this.streamingSelected.push(value);
    }
    else {
      this.streamingSelected.includes(value) ? this.streamingSelected.splice(this.streamingSelected.indexOf(value), 1) : {};
    }
  }
  messagingList: string[];
  messagingSelected = [];
  handleMessaging(value, isChecked) {
    if (isChecked == true) {
      this.messagingSelected.includes(value) ? {} : this.messagingSelected.push(value);
    }
    else {
      this.messagingSelected.includes(value) ? this.messagingSelected.splice(this.messagingSelected.indexOf(value), 1) : {};
    }
  }
  serverlessList: string[];
  serverlessSelected = [];
  handleServerless(value, isChecked) {
    if (isChecked == true) {
      this.serverlessSelected.includes(value) ? {} : this.serverlessSelected.push(value);
    }
    else {
      this.serverlessSelected.includes(value) ? this.serverlessSelected.splice(this.serverlessSelected.indexOf(value), 1) : {};
    }
  }
  integrationList: string[];
  integrationSelected = [];
  handleIntegration(value, isChecked) {
    if (isChecked == true) {
      this.integrationSelected.includes(value) ? {} : this.integrationSelected.push(value);
    }
    else {
      this.integrationSelected.includes(value) ? this.integrationSelected.splice(this.integrationSelected.indexOf(value), 1) : {};
    }
  }
  schemaDefinitionList: string[];
  schemaDefinitionSelected = [];
  handleSchemaDefinition(value, isChecked) {
    if (isChecked == true) {
      this.schemaDefinitionSelected.includes(value) ? {} : this.schemaDefinitionSelected.push(value);
    }
    else {
      this.schemaDefinitionSelected.includes(value) ? this.schemaDefinitionSelected.splice(this.schemaDefinitionSelected.indexOf(value), 1) : {};
    }
  }
  imageBuildList: string[];
  imageBuildSelected = [];
  handleImageBuild(value, isChecked) {
    if (isChecked == true) {
      this.imageBuildSelected.includes(value) ? {} : this.imageBuildSelected.push(value);
    }
    else {
      this.imageBuildSelected.includes(value) ? this.imageBuildSelected.splice(this.imageBuildSelected.indexOf(value), 1) : {};
    }
  }
  cicdList: string[];
  cicdSelected = [];
  handleCICD(value, isChecked) {
    if (isChecked == true) {
      this.cicdSelected.includes(value) ? {} : this.cicdSelected.push(value);
    }
    else {
      this.cicdSelected.includes(value) ? this.cicdSelected.splice(this.cicdSelected.indexOf(value), 1) : {};
    }
  }
  containerOrchestrationList: string[];
  containerOrchestrationSelected = [];
  handleContainerOrchestration(value, isChecked) {
    if (isChecked == true) {
      this.containerOrchestrationSelected.includes(value) ? {} : this.containerOrchestrationSelected.push(value);
    }
    else {
      this.containerOrchestrationSelected.includes(value) ? this.containerOrchestrationSelected.splice(this.containerOrchestrationSelected.indexOf(value), 1) : {};
    }
  }
  serviceDiscoveryList: string[];
  serviceDiscoverySelected = [];
  handleServiceDiscovery(value, isChecked) {
    if (isChecked == true) {
      this.serviceDiscoverySelected.includes(value) ? {} : this.serviceDiscoverySelected.push(value);
    }
    else {
      this.serviceDiscoverySelected.includes(value) ? this.serviceDiscoverySelected.splice(this.serviceDiscoverySelected.indexOf(value), 1) : {};
    }
  }
  remoteProcedureCellsList: string[];
  remoteProcedureCellsSelected = [];
  handleRpc(value, isChecked) {
    if (isChecked == true) {
      this.remoteProcedureCellsSelected.includes(value) ? {} : this.remoteProcedureCellsSelected.push(value);
    }
    else {
      this.remoteProcedureCellsSelected.includes(value) ? this.remoteProcedureCellsSelected.splice(this.remoteProcedureCellsSelected.indexOf(value), 1) : {};
    }
  }
  serviceMeshList: string[];
  serviceMeshSelected = [];
  handleServiceMesh(value, isChecked) {
    if (isChecked == true) {
      this.serviceMeshSelected.includes(value) ? {} : this.serviceMeshSelected.push(value);
    }
    else {
      this.serviceMeshSelected.includes(value) ? this.serviceMeshSelected.splice(this.serviceMeshSelected.indexOf(value), 1) : {};
    }
  }
  apiGatewayList: string[];
  apiGatewaySelected = [];
  handleApiGateway(value, isChecked) {
    if (isChecked == true) {
      this.apiGatewaySelected.includes(value) ? {} : this.apiGatewaySelected.push(value);
    }
    else {
      this.apiGatewaySelected.includes(value) ? this.apiGatewaySelected.splice(this.apiGatewaySelected.indexOf(value), 1) : {};
    }
  }
  hostManagementList: string[];
  hostManagementSelected = [];
  handleHostManagement(value, isChecked) {
    if (isChecked == true) {
      this.hostManagementSelected.includes(value) ? {} : this.hostManagementSelected.push(value);
    }
    else {
      this.hostManagementSelected.includes(value) ? this.apiGatewaySelected.splice(this.hostManagementSelected.indexOf(value), 1) : {};
    }
  }
  containerRegistryList: string[];
  containerRegistrySelected = [];
  handleContainerRegistry(value, isChecked) {
    if (isChecked == true) {
      this.containerRegistrySelected.includes(value) ? {} : this.containerRegistrySelected.push(value);
    }
    else {
      this.containerRegistrySelected.includes(value) ? this.containerRegistrySelected.splice(this.containerRegistrySelected.indexOf(value), 1) : {};
    }
  }
  securityList: string[];
  securitySelected = [];
  handleSecurity(value, isChecked) {
    if (isChecked == true) {
      this.securitySelected.includes(value) ? {} : this.securitySelected.push(value);
    }
    else {
      this.securitySelected.includes(value) ? this.securitySelected.splice(this.securitySelected.indexOf(value), 1) : {};
    }
  }
  keyManagementList: string[];
  keyManagementSelected = [];
  handleKeyManagement(value, isChecked) {
    if (isChecked == true) {
      this.keyManagementSelected.includes(value) ? {} : this.keyManagementSelected.push(value);
    }
    else {
      this.keyManagementSelected.includes(value) ? this.keyManagementSelected.splice(this.keyManagementSelected.indexOf(value), 1) : {};
    }
  }
  memoryManagementList: string[];
  memoryManagementSelected = [];
  handleMemoryManagement(value, isChecked) {
    if (isChecked == true) {
      this.memoryManagementSelected.includes(value) ? {} : this.memoryManagementSelected.push(value);
    }
    else {
      this.memoryManagementSelected.includes(value) ? this.memoryManagementSelected.splice(this.memoryManagementSelected.indexOf(value), 1) : {};
    }
  }
  monitoringList: string[];
  monitoringSelected = [];
  handleMonitoring(value, isChecked) {
    if (isChecked == true) {
      this.monitoringSelected.includes(value) ? {} : this.monitoringSelected.push(value);
    }
    else {
      this.monitoringSelected.includes(value) ? this.monitoringSelected.splice(this.monitoringSelected.indexOf(value), 1) : {};
    }
  }
  loggingList: string[];
  loggingSelected = [];
  handleLogging(value, isChecked) {
    if (isChecked == true) {
      this.loggingSelected.includes(value) ? {} : this.loggingSelected.push(value);
    }
    else {
      this.loggingSelected.includes(value) ? this.loggingSelected.splice(this.loggingSelected.indexOf(value), 1) : {};
    }
  }
  tracingList: string[];
  tracingSelected = [];
  handleTracing(value, isChecked) {
    if (isChecked == true) {
      this.tracingSelected.includes(value) ? {} : this.tracingSelected.push(value);
    }
    else {
      this.tracingSelected.includes(value) ? this.tracingSelected.splice(this.tracingSelected.indexOf(value), 1) : {};
    }
  }
  apiAnalyticsList: string[];
  apiAnalyticsSelected = [];
  handleApiAnalytics(value, isChecked) {
    if (isChecked == true) {
      this.apiAnalyticsSelected.includes(value) ? {} : this.apiAnalyticsSelected.push(value);
    }
    else {
      this.apiAnalyticsSelected.includes(value) ? this.apiAnalyticsSelected.splice(this.apiAnalyticsSelected.indexOf(value), 1) : {};
    }
  }
  alertsList: string[];
  alertsSelected = [];
  handleAlerts(value, isChecked) {
    if (isChecked == true) {
      this.alertsSelected.includes(value) ? {} : this.alertsSelected.push(value);
    }
    else {
      this.alertsSelected.includes(value) ? this.alertsSelected.splice(this.alertsSelected.indexOf(value), 1) : {};
    }
  }

  toBe = {
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

















  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private authenticationService: AuthenticationService) {

    this.username = localStorage.getItem('username');
    this.project = new Portfolio();

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



  patchForm() {
    this.appliationEstateForm.patchValue({
      ageOfApplication: [this.asIsSelected.ageOfApplication],
      apiGateway: [this.asIsSelected.apiGateway],
      applicationLanguageDependency: [this.asIsSelected.applicationLanguageDependency],
      applicationDocumentsAvailability: [this.asIsSelected.applicationDocumentsAvailability],
      applicationClassification: [this.asIsSelected.applicationClassification],
      applicationDescription: [this.asIsSelected.applicationDescription],
      applicationPopulation: [this.asIsSelected.applicationPopulation],
      applicationSupportHours: [this.asIsSelected.applicationSupportHours],
      appServers: [this.asIsSelected.appServers],
      appVersion: [this.asIsSelected.appVersion],
      businessUnitDiscoverySpoc: [this.asIsSelected.businessUnitDiscoverySpoc],
      changeRequestYearly: [this.asIsSelected.changeRequestYearly],
      cicd: [this.asIsSelected.cicd],
      cicdTools: [this.asIsSelected.cicdTools],
      database: [this.asIsSelected.database],
      databaseVersion: [this.asIsSelected.databaseVersion],
      globalLocal: [this.asIsSelected.globalLocal],
      incidentRequestYearly: [this.asIsSelected.incidentRequestYearly],
      totalRequestYearly: [this.asIsSelected.totalRequestYearly],
      infrastructure: [this.asIsSelected.infrastructure],
      integrationLayer: [this.asIsSelected.integrationLayer],
      isApplicationPlannedSunset: [this.asIsSelected.isApplicationPlannedSunset],
      isApplicationRationalized: [this.asIsSelected.isApplicationRationalized],
      isApplicationTobeOnCloud: [this.asIsSelected.isApplicationTobeOnCloud],
      isAppShadowIT: [this.asIsSelected.isAppShadowIT],
      isOnSupportPresent: [this.asIsSelected.isOnSupportPresent],
      languageBackEnd: [this.asIsSelected.languageBackEnd],
      languageFrontEnd: [this.asIsSelected.languageFrontEnd],
      languageBEVersion: [this.asIsSelected.languageBEVersion],
      languageFEVersion: [this.asIsSelected.languageFEVersion],
      totalLoc: [this.asIsSelected.totalLoc],
      frontEndLoc: [this.asIsSelected.frontEndLoc],
      dbLoc: [this.asIsSelected.dbLoc],
      backEndLoc: [this.asIsSelected.backEndLoc],
      operatingSystem: [this.asIsSelected.operatingSystem],
      packageSoftware: [this.asIsSelected.packageSoftware],
      platform: [this.asIsSelected.platform],
      process: [this.asIsSelected.process],
      processTools: [this.asIsSelected.processTools],
      region: [this.asIsSelected.region],
      regionalDiscoverySpoc: [this.asIsSelected.regionalDiscoverySpoc],
      releaseCycle: [this.asIsSelected.releaseCycle],
      serviceRequestYearly: [this.asIsSelected.serviceRequestYearly],
      solutionModel: [this.asIsSelected.solutionModel],
      sunsetDate: [this.asIsSelected.sunsetDate],
      comment: [this.asIsSelected.comment],
    });
  }

  toBePatch() {
    //
    this.platformSelected = this.toBeSelected.platform.split(',');
    this.platformSelected.splice(this.platformSelected.indexOf('-'),1);
    this.platformOther = this.platformSelected.filter(e => !this.platformList.includes(e)).toString();
    this.platformOther != '' ? this.platformSelected.splice(this.platformSelected.indexOf(this.platformOther), 1, 'Other') : {};

    //
    this.databaseSelected = this.toBeSelected.database.split(',');
    this.databaseOther = this.databaseSelected.filter(e => !this.databaseList.includes(e)).toString();
    this.databaseOther != '' ? this.databaseSelected.splice(this.databaseSelected.indexOf(this.databaseOther), 1, 'Other') : {};
    //
    this.streamingSelected = this.toBeSelected.streaming.split(',');
    this.streamingOther = this.streamingSelected.filter(e => !this.streamingList.includes(e)).toString();
    this.streamingOther != '' ? this.streamingSelected.splice(this.streamingSelected.indexOf(this.streamingOther), 1, 'Other') : {};
    //
    this.analyticsSelected = this.toBeSelected.analytics.split(',');
    this.analyticsOther = this.analyticsSelected.filter(e => !this.analyticsList.includes(e)).toString();
    this.analyticsOther != '' ? this.analyticsSelected.splice(this.analyticsSelected.indexOf(this.analyticsOther), 1, 'Other') : {};
    //
    this.messagingSelected = this.toBeSelected.messaging.split(',');
    this.messagingOther = this.messagingSelected.filter(e => !this.messagingList.includes(e)).toString();
    this.messagingOther != '' ? this.messagingSelected.splice(this.messagingSelected.indexOf(this.messagingOther), 1, 'Other') : {};
    //
    this.serverlessSelected = this.toBeSelected.serverless.split(',');
    this.serverlessOther = this.serverlessSelected.filter(e => !this.serverlessList.includes(e)).toString();
    this.serverlessOther != '' ? this.serverlessSelected.splice(this.serverlessSelected.indexOf(this.serverlessOther), 1, 'Other') : {};
    //
    this.integrationSelected = this.toBeSelected.integration.split(',');
    this.integrationOther = this.integrationSelected.filter(e => !this.integrationList.includes(e)).toString();
    this.integrationOther != '' ? this.integrationSelected.splice(this.integrationSelected.indexOf(this.integrationOther), 1, 'Other') : {};
    //
    this.schemaDefinitionSelected = this.toBeSelected.schemaDefinition.split(',');
    this.schemaDefinitionOther = this.streamingSelected.filter(e => !this.schemaDefinitionList.includes(e)).toString();
    this.schemaDefinitionOther != '' ? this.schemaDefinitionSelected.splice(this.schemaDefinitionSelected.indexOf(this.schemaDefinitionOther), 1, 'Other') : {};
    //
    this.imageBuildSelected = this.toBeSelected.imageBuild.split(',');
    this.imageBuildOther = this.imageBuildSelected.filter(e => !this.imageBuildList.includes(e)).toString();
    this.imageBuildOther != '' ? this.imageBuildSelected.splice(this.imageBuildSelected.indexOf(this.imageBuildOther), 1, 'Other') : {};
    //
    this.cicdSelected = this.toBeSelected.cicd.split(',');
    this.cicdOther = this.cicdSelected.filter(e => !this.cicdList.includes(e)).toString();
    this.cicdOther != '' ? this.cicdSelected.splice(this.cicdSelected.indexOf(this.cicdOther), 1, 'Other') : {};
    //
    this.containerOrchestrationSelected = this.toBeSelected.containerOrchestration.split(',');
    this.containerOrchestrationOther = this.containerOrchestrationSelected.filter(e => !this.containerOrchestrationList.includes(e)).toString();
    this.containerOrchestrationOther != '' ? this.containerOrchestrationSelected.splice(this.containerOrchestrationSelected.indexOf(this.containerOrchestrationOther), 1, 'Other') : {};
    //
    this.serviceDiscoverySelected = this.toBeSelected.serviceDiscovery.split(',');
    this.serviceDiscoveryOther = this.serviceDiscoverySelected.filter(e => !this.serviceDiscoveryList.includes(e)).toString();
    this.serviceDiscoveryOther != '' ? this.serviceDiscoverySelected.splice(this.serviceDiscoverySelected.indexOf(this.serviceDiscoveryOther), 1, 'Other') : {};
    //
    this.remoteProcedureCellsSelected = this.toBeSelected.rpc.split(',');
    this.rpcOther = this.remoteProcedureCellsSelected.filter(e => !this.remoteProcedureCellsList.includes(e)).toString();
    this.rpcOther != '' ? this.remoteProcedureCellsSelected.splice(this.remoteProcedureCellsSelected.indexOf(this.rpcOther), 1, 'Other') : {};
    //
    this.serviceMeshSelected = this.toBeSelected.serviceMesh.split(',');
    this.serviceMeshOther = this.serviceMeshSelected.filter(e => !this.serviceMeshList.includes(e)).toString();
    this.serviceMeshOther != '' ? this.serviceMeshSelected.splice(this.serviceMeshSelected.indexOf(this.serviceMeshOther), 1, 'Other') : {};
    //
    this.apiGatewaySelected = this.toBeSelected.apiGateway.split(',');
    this.apiGatewayOther = this.apiGatewaySelected.filter(e => !this.apiGatewayList.includes(e)).toString();
    this.apiGatewayOther != '' ? this.apiGatewaySelected.splice(this.apiGatewaySelected.indexOf(this.apiGatewayOther), 1, 'Other') : {};
    //
    this.hostManagementSelected = this.toBeSelected.hostManagement.split(',');
    this.hostManagementOther = this.hostManagementSelected.filter(e => !this.hostManagementList.includes(e)).toString();
    this.hostManagementOther != '' ? this.hostManagementSelected.splice(this.hostManagementSelected.indexOf(this.hostManagementOther), 1, 'Other') : {};
    //
    this.containerRegistrySelected = this.toBeSelected.containerRegistry.split(',');
    this.containerRegistryOther = this.containerRegistrySelected.filter(e => !this.containerRegistryList.includes(e)).toString();
    this.containerRegistryOther != '' ? this.containerRegistrySelected.splice(this.containerRegistrySelected.indexOf(this.containerRegistryOther), 1, 'Other') : {};
    //
    this.securitySelected = this.toBeSelected.security.split(',');
    this.securityOther = this.securitySelected.filter(e => !this.securityList.includes(e)).toString();
    this.securityOther != '' ? this.securitySelected.splice(this.securitySelected.indexOf(this.securityOther), 1, 'Other') : {};
    //
    this.keyManagementSelected = this.toBeSelected.keyManagement.split(',');
    this.keyManagementOther = this.keyManagementSelected.filter(e => !this.keyManagementList.includes(e)).toString();
    this.keyManagementOther != '' ? this.keyManagementSelected.splice(this.keyManagementSelected.indexOf(this.keyManagementOther), 1, 'Other') : {};
    //
    this.monitoringSelected = this.toBeSelected.monitoring.split(',');
    this.monitoringOther = this.monitoringSelected.filter(e => !this.monitoringList.includes(e)).toString();
    this.monitoringOther != '' ? this.monitoringSelected.splice(this.monitoringSelected.indexOf(this.monitoringOther), 1, 'Other') : {};
    //
    this.loggingSelected = this.toBeSelected.logging.split(',');
    this.loggingOther = this.loggingSelected.filter(e => !this.loggingList.includes(e)).toString();
    this.loggingOther != '' ? this.loggingSelected.splice(this.loggingSelected.indexOf(this.loggingOther), 1, 'Other') : {};
    //
    this.tracingSelected = this.toBeSelected.tracing.split(',');
    this.tracingOther = this.tracingSelected.filter(e => !this.tracingList.includes(e)).toString();
    this.tracingOther != '' ? this.tracingSelected.splice(this.tracingSelected.indexOf(this.tracingOther), 1, 'Other') : {};
    //
    this.apiAnalyticsSelected = this.toBeSelected.apiAnalytics.split(',');
    this.apiAnalyticsOther = this.apiAnalyticsSelected.filter(e => !this.apiAnalyticsList.includes(e)).toString();
    this.apiAnalyticsOther != '' ? this.apiAnalyticsSelected.splice(this.apiAnalyticsSelected.indexOf(this.apiAnalyticsOther), 1, 'Other') : {};
    //
    this.alertsSelected = this.toBeSelected.alerts.split(',');
    this.alertsOther = this.alertsSelected.filter(e => !this.alertsList.includes(e)).toString();
    this.alertsOther != '' ? this.alertsSelected.splice(this.alertsSelected.indexOf(this.alertsOther), 1, 'Other') : {};
    //
    this.memoryManagementSelected = this.toBeSelected.memoryManagement.split(',');
    this.memoryManagementOther = this.memoryManagementSelected.filter(e => !this.memoryManagementList.includes(e)).toString();
    this.memoryManagementOther != '' ? this.memoryManagementSelected.splice(this.memoryManagementSelected.indexOf(this.memoryManagementOther), 1, 'Other') : {};

  }

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('editId');
    this.authenticationService.getRecord(this.editId).subscribe(
      data => {
        this.project = data.portfolioResponse[0];
        this.asIsSelected = this.project.asIs;
        this.patchForm();
        this.toBeSelected = this.project.toBe;
        this.toBePatch();
        console.log(this.project);
      },
      error => {
        console.log(error.message);
      }
    );


    this.platformList = this.authenticationService.platformList;
    this.databaseList = this.authenticationService.databaseList;
    this.streamingList = this.authenticationService.streamingList;
    this.analyticsList = this.authenticationService.analyticsList;
    this.messagingList = this.authenticationService.messagingList;
    this.serverlessList = this.authenticationService.serverlessList;
    this.integrationList = this.authenticationService.integrationList;
    this.schemaDefinitionList = this.authenticationService.schemaDefinitionList;
    this.imageBuildList = this.authenticationService.imageBuildList;
    this.cicdList = this.authenticationService.cicdList;
    this.containerOrchestrationList = this.authenticationService.containerOrchestrationList;
    this.serviceDiscoveryList = this.authenticationService.serviceDiscoveryList;
    this.remoteProcedureCellsList = this.authenticationService.rpcList;
    this.serviceMeshList = this.authenticationService.serviceMeshList;
    this.apiGatewayList = this.authenticationService.apiGatewayList;
    this.hostManagementList = this.authenticationService.hostManagementList;
    this.containerRegistryList = this.authenticationService.containerRegistryList;
    this.securityList = this.authenticationService.securityList;
    this.keyManagementList = this.authenticationService.keyManagementList;
    this.monitoringList = this.authenticationService.monitoringList;
    this.loggingList = this.authenticationService.loggingList;
    this.tracingList = this.authenticationService.tracingList;
    this.apiAnalyticsList = this.authenticationService.apiAnalyticsList;
    this.alertsList = this.authenticationService.alertsList;
    this.memoryManagementList = this.authenticationService.memoryManagementList;
  }

  get f() { return this.appliationEstateForm.controls; }

  onNext() {
    window.scroll(0,0);
    this.hideFuture = false;

    //Application-state-form

    this.asIs.ageOfApplication = this.f.ageOfApplication.value.toString();
    this.asIs.apiGateway = this.f.apiGateway.value.toString();
    this.asIs.applicationLanguageDependency = this.f.applicationLanguageDependency.value.toString();
    this.asIs.applicationDocumentsAvailability = this.f.applicationDocumentsAvailability.value.toString();
    this.asIs.applicationClassification = this.f.applicationClassification.value.toString();
    this.asIs.applicationDescription = this.f.applicationDescription.value.toString();
    this.asIs.applicationPopulation = this.f.applicationPopulation.value.toString();
    this.asIs.applicationSupportHours = this.f.applicationSupportHours.value.toString();
    this.asIs.appServers = this.f.appServers.value.toString();
    this.asIs.appVersion = this.f.appVersion.value.toString();
    this.asIs.businessUnitDiscoverySpoc = this.f.businessUnitDiscoverySpoc.value.toString();
    this.asIs.changeRequestYearly = this.f.changeRequestYearly.value.toString();
    this.asIs.cicd = this.f.cicd.value.toString();
    this.asIs.cicdTools = this.f.cicdTools.value.toString();
    this.asIs.database = this.f.database.value.toString();
    this.asIs.databaseVersion = this.f.databaseVersion.value.toString();
    this.asIs.globalLocal = this.f.globalLocal.value.toString();
    this.asIs.incidentRequestYearly = this.f.incidentRequestYearly.value.toString();
    this.asIs.totalRequestYearly = this.f.totalRequestYearly.value.toString();
    this.asIs.infrastructure = this.f.infrastructure.value.toString();
    this.asIs.integrationLayer = this.f.integrationLayer.value.toString();
    this.asIs.isApplicationPlannedSunset = this.f.isApplicationPlannedSunset.value.toString();
    this.asIs.isApplicationRationalized = this.f.isApplicationRationalized.value.toString();
    this.asIs.isApplicationTobeOnCloud = this.f.isApplicationTobeOnCloud.value.toString();
    this.asIs.isAppShadowIT = this.f.isAppShadowIT.value.toString();
    this.asIs.isOnSupportPresent = this.f.isOnSupportPresent.value.toString();
    this.asIs.languageBackEnd = this.f.languageBackEnd.value.toString();
    this.asIs.languageFrontEnd = this.f.languageFrontEnd.value.toString();
    this.asIs.languageBEVersion = this.f.languageBEVersion.value.toString();
    this.asIs.languageFEVersion = this.f.languageFEVersion.value.toString();
    this.asIs.totalLoc = this.f.totalLoc.value.toString();
    this.asIs.frontEndLoc = this.f.frontEndLoc.value.toString();
    this.asIs.dbLoc = this.f.dbLoc.value.toString();
    this.asIs.integrationLayer = this.f.integrationLayer.value.toString();
    this.asIs.backEndLoc = this.f.backEndLoc.value.toString();
    this.asIs.operatingSystem = this.f.operatingSystem.value.toString();
    this.asIs.packageSoftware = this.f.packageSoftware.value.toString();
    this.asIs.platform = this.f.platform.value.toString();
    this.asIs.process = this.f.process.value.toString();
    this.asIs.processTools = this.f.processTools.value.toString();
    this.asIs.region = this.f.region.value.toString();
    this.asIs.regionalDiscoverySpoc = this.f.regionalDiscoverySpoc.value.toString();
    this.asIs.releaseCycle = this.f.releaseCycle.value.toString();
    this.asIs.serviceRequestYearly = this.f.serviceRequestYearly.value.toString();
    this.asIs.solutionModel = this.f.solutionModel.value.toString();
    this.asIs.sunsetDate = this.f.sunsetDate.value.toString();
    this.asIs.integrationLayer = this.f.integrationLayer.value.toString();
    this.asIs.comment = this.f.comment.value.toString();

    //this.authenticationService.save2(this.asIs);
    console.log(this.asIs);

  }

  onSubmit() {

    //Future-state-form

    //platform
    if (this.platformSelected.includes('Other')) {
      this.platformOther == "" ? this.platformSelected.splice(this.platformSelected.indexOf('Other'), 1)
        : this.platformSelected.splice(this.platformSelected.indexOf('Other'), 1, this.platformOther);
    }
    //this.sampleForm.controls['platform'].setValue(this.platformSelected);
    this.toBe.platform = this.platformSelected.toString();

    //database
    if (this.databaseSelected.includes('Other')) {
      this.databaseOther == "" ? this.databaseSelected.splice(this.databaseSelected.indexOf('Other'), 1)
        : this.databaseSelected.splice(this.databaseSelected.indexOf('Other'), 1, this.databaseOther);
    }
    this.toBe.database = this.databaseSelected.toString();
    //analytics
    if (this.analyticsSelected.includes('Other')) {
      this.analyticsOther == "" ? this.analyticsSelected.splice(this.analyticsSelected.indexOf('Other'), 1)
        : this.analyticsSelected.splice(this.analyticsSelected.indexOf('Other'), 1, this.analyticsOther);
    }
    this.toBe.analytics = this.analyticsSelected.toString();
    //streaming
    if (this.streamingSelected.includes('Other')) {
      this.streamingOther == "" ? this.streamingSelected.splice(this.serverlessSelected.indexOf('Other'), 1)
        : this.streamingSelected.splice(this.serverlessSelected.indexOf('Other'), 1, this.streamingOther);
    }
    this.toBe.streaming = this.streamingSelected.toString();
    //messaging
    if (this.messagingSelected.includes('Other')) {
      this.messagingOther == "" ? this.messagingSelected.splice(this.messagingSelected.indexOf('Other'), 1)
        : this.messagingSelected.splice(this.messagingSelected.indexOf('Other'), 1, this.messagingOther);
    }
    this.toBe.messaging = this.messagingSelected.toString();
    //serverless
    if (this.serverlessSelected.includes('Other')) {
      this.serverlessOther == "" ? this.serverlessSelected.splice(this.serverlessSelected.indexOf('Other'), 1)
        : this.serverlessSelected.splice(this.serverlessSelected.indexOf('Other'), 1, this.serverlessOther);
    }
    this.toBe.serverless = this.serverlessSelected.toString();

    //integration
    if (this.integrationSelected.includes('Other')) {
      this.integrationOther == "" ? this.integrationSelected.splice(this.integrationSelected.indexOf('Other'), 1)
        : this.integrationSelected.splice(this.integrationSelected.indexOf('Other'), 1, this.integrationOther);
    }
    this.toBe.integration = this.integrationSelected.toString();

    //schemaDefinition
    if (this.schemaDefinitionSelected.includes('Other')) {
      this.schemaDefinitionOther == "" ? this.schemaDefinitionSelected.splice(this.schemaDefinitionSelected.indexOf('Other'), 1)
        : this.schemaDefinitionSelected.splice(this.schemaDefinitionSelected.indexOf('Other'), 1, this.schemaDefinitionOther);
    }
    //this.sampleForm.controls['schemaDefinition'].setValue(this.schemaDefinitionSelected);
    this.toBe.schemaDefinition = this.schemaDefinitionSelected.toString();

    //imageBuild
    if (this.imageBuildSelected.includes('Other')) {
      this.imageBuildOther == "" ? this.imageBuildSelected.splice(this.imageBuildSelected.indexOf('Other'), 1)
        : this.imageBuildSelected.splice(this.imageBuildSelected.indexOf('Other'), 1, this.imageBuildOther);
    }
    //this.sampleForm.controls['imageBuild'].setValue(this.imageBuildSelected);
    this.toBe.imageBuild = this.imageBuildSelected.toString();

    //cicd
    if (this.cicdSelected.includes('Other')) {
      this.cicdOther == "" ? this.cicdSelected.splice(this.cicdSelected.indexOf('Other'), 1)
        : this.cicdSelected.splice(this.cicdSelected.indexOf('Other'), 1, this.cicdOther);
    }
    //this.sampleForm.controls['cicd'].setValue(this.cicdSelected);
    this.toBe.cicd = this.cicdSelected.toString();

    //containerOrchestration
    if (this.containerOrchestrationSelected.includes('Other')) {
      this.containerOrchestrationOther == "" ? this.containerOrchestrationSelected.splice(this.containerOrchestrationSelected.indexOf('Other'), 1)
        : this.containerOrchestrationSelected.splice(this.containerOrchestrationSelected.indexOf('Other'), 1, this.containerOrchestrationOther);
    }
    //this.sampleForm.controls['containerOrchestration'].setValue(this.containerOrchestrationSelected);
    this.toBe.containerOrchestration = this.containerOrchestrationSelected.toString();

    //serviceDiscovery
    if (this.serviceDiscoverySelected.includes('Other')) {
      this.serviceDiscoveryOther == "" ? this.serviceDiscoverySelected.splice(this.serviceDiscoverySelected.indexOf('Other'), 1)
        : this.serviceDiscoverySelected.splice(this.serviceDiscoverySelected.indexOf('Other'), 1, this.serviceDiscoveryOther);
    }
    //this.sampleForm.controls['serviceDiscovery'].setValue(this.serviceDiscoverySelected);
    this.toBe.serviceDiscovery = this.serviceDiscoverySelected.toString();

    //rpc
    if (this.remoteProcedureCellsSelected.includes('Other')) {
      this.rpcOther == "" ? this.remoteProcedureCellsSelected.splice(this.remoteProcedureCellsSelected.indexOf('Other'), 1)
        : this.remoteProcedureCellsSelected.splice(this.remoteProcedureCellsSelected.indexOf('Other'), 1, this.rpcOther);
    }
    //this.sampleForm.controls['rpc'].setValue(this.remoteProcedureCellsSelected);
    this.toBe.rpc = this.remoteProcedureCellsSelected.toString();

    //serviceMesh
    if (this.serviceMeshSelected.includes('Other')) {
      this.serviceMeshOther == "" ? this.serviceMeshSelected.splice(this.serviceMeshSelected.indexOf('Other'), 1)
        : this.serviceMeshSelected.splice(this.serviceMeshSelected.indexOf('Other'), 1, this.serviceMeshOther);
    }
    //this.sampleForm.controls['serviceMesh'].setValue(this.serviceMeshSelected);
    this.toBe.serviceMesh = this.serviceMeshSelected.toString();

    //apiGateway
    if (this.apiGatewaySelected.includes('Other')) {
      this.apiGatewayOther == "" ? this.apiGatewaySelected.splice(this.apiGatewaySelected.indexOf('Other'), 1)
        : this.apiGatewaySelected.splice(this.apiGatewaySelected.indexOf('Other'), 1, this.apiGatewayOther);
    }
    //this.sampleForm.controls['apiGateway'].setValue(this.apiGatewaySelected);
    this.toBe.apiGateway = this.messagingSelected.toString();

    //hostManagement
    if (this.hostManagementSelected.includes('Other')) {
      this.hostManagementOther == "" ? this.hostManagementSelected.splice(this.hostManagementSelected.indexOf('Other'), 1)
        : this.hostManagementSelected.splice(this.hostManagementSelected.indexOf('Other'), 1, this.hostManagementOther);
    }
    //this.sampleForm.controls['hostManagement'].setValue(this.hostManagementSelected);
    this.toBe.hostManagement = this.hostManagementSelected.toString();

    //containerRegistry
    if (this.containerRegistrySelected.includes('Other')) {
      this.containerRegistryOther == "" ? this.containerRegistrySelected.splice(this.containerRegistrySelected.indexOf('Other'), 1)
        : this.containerRegistrySelected.splice(this.containerRegistrySelected.indexOf('Other'), 1, this.containerRegistryOther);
    }
    //this.sampleForm.controls['containerRegistry'].setValue(this.containerRegistrySelected);
    this.toBe.containerRegistry = this.containerRegistrySelected.toString();

    //security
    if (this.securitySelected.includes('Other')) {
      this.securityOther == "" ? this.securitySelected.splice(this.securitySelected.indexOf('Other'), 1)
        : this.securitySelected.splice(this.securitySelected.indexOf('Other'), 1, this.securityOther);
    }
    //this.sampleForm.controls['security'].setValue(this.securitySelected);
    this.toBe.security = this.securitySelected.toString();

    //keyManagement
    if (this.keyManagementSelected.includes('Other')) {
      this.keyManagementOther == "" ? this.keyManagementSelected.splice(this.keyManagementSelected.indexOf('Other'), 1)
        : this.keyManagementSelected.splice(this.keyManagementSelected.indexOf('Other'), 1, this.keyManagementOther);
    }
    //this.sampleForm.controls['keyManagement'].setValue(this.keyManagementSelected);
    this.toBe.keyManagement = this.keyManagementSelected.toString();

    //memoryManagement
    if (this.memoryManagementSelected.includes('Other')) {
      this.memoryManagementOther == "" ? this.memoryManagementSelected.splice(this.memoryManagementSelected.indexOf('Other'), 1)
        : this.memoryManagementSelected.splice(this.memoryManagementSelected.indexOf('Other'), 1, this.memoryManagementOther);
    }
    //this.sampleForm.controls['memoryManagement'].setValue(this.memoryManagementSelected);
    this.toBe.memoryManagement = this.memoryManagementSelected.toString();

    //monitoring
    if (this.monitoringSelected.includes('Other')) {
      this.monitoringOther == "" ? this.monitoringSelected.splice(this.monitoringSelected.indexOf('Other'), 1)
        : this.monitoringSelected.splice(this.monitoringSelected.indexOf('Other'), 1, this.monitoringOther);
    }
    //this.sampleForm.controls['monitoring'].setValue(this.monitoringSelected);
    this.toBe.monitoring = this.monitoringSelected.toString();

    //logging
    if (this.loggingSelected.includes('Other')) {
      this.loggingOther == "" ? this.loggingSelected.splice(this.loggingSelected.indexOf('Other'), 1)
        : this.loggingSelected.splice(this.loggingSelected.indexOf('Other'), 1, this.loggingOther);
    }
    //this.sampleForm.controls['logging'].setValue(this.loggingSelected);
    this.toBe.logging = this.loggingSelected.toString();

    //tracing
    if (this.tracingSelected.includes('Other')) {
      this.tracingOther == "" ? this.tracingSelected.splice(this.tracingSelected.indexOf('Other'), 1)
        : this.tracingSelected.splice(this.tracingSelected.indexOf('Other'), 1, this.tracingOther);
    }
    //this.sampleForm.controls['tracing'].setValue(this.tracingSelected);
    this.toBe.tracing = this.tracingSelected.toString();

    //apiAnalytics
    if (this.apiAnalyticsSelected.includes('Other')) {
      this.apiAnalyticsOther == "" ? this.apiAnalyticsSelected.splice(this.apiAnalyticsSelected.indexOf('Other'), 1)
        : this.apiAnalyticsSelected.splice(this.apiAnalyticsSelected.indexOf('Other'), 1, this.apiAnalyticsOther);
    }
    //this.sampleForm.controls['apiAnalytics'].setValue(this.apiAnalyticsSelected);
    this.toBe.apiAnalytics = this.apiAnalyticsSelected.toString();

    //alerts
    if (this.alertsSelected.includes('Other')) {
      this.alertsOther == "" ? this.alertsSelected.splice(this.alertsSelected.indexOf('Other'), 1)
        : this.alertsSelected.splice(this.alertsSelected.indexOf('Other'), 1, this.alertsOther);
    }
    //this.sampleForm.controls['alerts'].setValue(this.alertsSelected);
    this.toBe.alerts = this.alertsSelected.toString();


    console.log(this.toBe);

    this.project.asIs = this.asIs;
    this.project.toBe = this.toBe;
    this.project.entity = "Portfolio";

    console.log(JSON.stringify(this.project));

    //this.authenticationService.save3(this.toBe);
    //this.router.navigate(['future-state']);

    this.authenticationService.updateData(this.project).subscribe(
      data => {
        this.toast.success(data.message);
        this.router.navigate(['view-details']);

      },
      error => {
        this.toast.error(error);
        console.log(error);
      });

  }
}
