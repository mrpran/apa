import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-future-state',
  templateUrl: './future-state.component.html',
  styleUrls: ['./future-state.component.css']
})

export class FutureStateComponent implements OnInit {


  sampleForm: FormGroup;
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


  platformList: string[];
  platformSelected = [];
  handlePlatform(value) {
    if (this.platformSelected.includes(value)) {
      this.platformSelected.splice(this.platformSelected.indexOf(value), 1);
    }
    else {
      this.platformSelected.push(value);
    }
  }


  databaseList: string[];
  databaseSelected = [];
  handleDatabase(value) {
    if (this.databaseSelected.includes(value)) {
      this.databaseSelected.splice(this.databaseSelected.indexOf(value), 1);
    }
    else {
      this.databaseSelected.push(value);
    }
  }
  analyticsList: string[];
  analyticsSelected = [];
  handleAnalytics(value) {
    let index = this.analyticsSelected.indexOf(value);
    if (index == -1) {
      this.analyticsSelected.push(value);
    }
    else {
      this.analyticsSelected.splice(index, 1);
    }
  }
  streamingList: string[];
  streamingSelected = [];
  handleStreaming(value) {
    let index = this.streamingSelected.indexOf(value);
    if (index == -1) {
      this.streamingSelected.push(value);
    }
    else {
      this.streamingSelected.splice(index, 1);
    }
  }
  messagingList: string[];
  messagingSelected = [];
  handleMessaging(value) {
    let index = this.messagingSelected.indexOf(value);
    if (index == -1) {
      this.messagingSelected.push(value);
    }
    else {
      this.messagingSelected.splice(index, 1);
    }
  }
  serverlessList: string[];
  serverlessSelected = [];
  handleServerless(value) {
    if (this.serverlessSelected.includes(value)) {
      this.serverlessSelected.splice(this.serverlessSelected.indexOf(value), 1);
    }
    else {
      this.serverlessSelected.push(value);
    }
  }
  integrationList: string[];
  integrationSelected = [];
  handleIntegration(value) {
    let index = this.integrationSelected.indexOf(value);
    if (this.integrationSelected.includes(value)) {
      this.integrationSelected.splice(this.integrationSelected.indexOf(value), 1);
    }
    else {
      this.integrationSelected.push(value);
    }
  }
  schemaDefinitionList: string[];
  schemaDefinitionSelected = [];
  handleSchemaDefinition(value) {
    let index = this.schemaDefinitionSelected.indexOf(value);
    if (index == -1) {
      this.schemaDefinitionSelected.push(value);
    }
    else {
      this.schemaDefinitionSelected.splice(index, 1);
    }
  }
  imageBuildList: string[];
  imageBuildSelected = [];
  handleImageBuild(value) {
    let index = this.imageBuildSelected.indexOf(value);
    if (index == -1) {
      this.imageBuildSelected.push(value);
    }
    else {
      this.imageBuildSelected.splice(index, 1);
    }
  }
  cicdList: string[];
  cicdSelected = [];
  handleCICD(value) {
    let index = this.cicdSelected.indexOf(value);
    if (index == -1) {
      this.cicdSelected.push(value);
    }
    else {
      this.cicdSelected.splice(index, 1);
    }
  }
  containerOrchestrationList: string[];
  containerOrchestrationSelected = [];
  handleContainerOrchestration(value) {
    let index = this.containerOrchestrationSelected.indexOf(value);
    if (index == -1) {
      this.containerOrchestrationSelected.push(value);
    }
    else {
      this.containerOrchestrationSelected.splice(index, 1);
    }
  }
  serviceDiscoveryList: string[];
  serviceDiscoverySelected = [];
  handleServiceDiscovery(value) {
    let index = this.serviceDiscoverySelected.indexOf(value);
    if (index == -1) {
      this.serviceDiscoverySelected.push(value);
    }
    else {
      this.serviceDiscoverySelected.splice(index, 1);
    }
  }
  remoteProcedureCellsList: string[];
  remoteProcedureCellsSelected = [];
  handleRpc(value) {
    let index = this.remoteProcedureCellsSelected.indexOf(value);
    if (index == -1) {
      this.remoteProcedureCellsSelected.push(value);
    }
    else {
      this.remoteProcedureCellsSelected.splice(index, 1);
    }
  }
  serviceMeshList: string[];
  serviceMeshSelected = [];
  handleServiceMesh(value) {
    let index = this.serviceMeshSelected.indexOf(value);
    if (index == -1) {
      this.serviceMeshSelected.push(value);
    }
    else {
      this.serviceMeshSelected.splice(index, 1);
    }
  }
  apiGatewayList: string[];
  apiGatewaySelected = [];
  handleApiGateway(value) {
    let index = this.apiGatewaySelected.indexOf(value);
    if (index == -1) {
      this.apiGatewaySelected.push(value);
    }
    else {
      this.apiGatewaySelected.splice(index, 1);
    }
  }
  hostManagementList: string[];
  hostManagementSelected = [];
  handleHostManagement(value) {
    let index = this.hostManagementSelected.indexOf(value);
    if (index == -1) {
      this.hostManagementSelected.push(value);
    }
    else {
      this.hostManagementSelected.splice(index, 1);
    }
  }
  containerRegistryList: string[];
  containerRegistrySelected = [];
  handleContainerRegistry(value) {
    let index = this.containerRegistrySelected.indexOf(value);
    if (index == -1) {
      this.containerRegistrySelected.push(value);
    }
    else {
      this.containerRegistrySelected.splice(index, 1);
    }
  }
  securityList: string[];
  securitySelected = [];
  handleSecurity(value) {
    let index = this.securitySelected.indexOf(value);
    if (index == -1) {
      this.securitySelected.push(value);
    }
    else {
      this.securitySelected.splice(index, 1);
    }
  }
  keyManagementList: string[];
  keyManagementSelected = [];
  handleKeyManagement(value) {
    let index = this.keyManagementSelected.indexOf(value);
    if (index == -1) {
      this.keyManagementSelected.push(value);
    }
    else {
      this.keyManagementSelected.splice(index, 1);
    }
  }
  memoryManagementList: string[];
  memoryManagementSelected = [];
  handleMemoryManagement(value) {
    let index = this.memoryManagementSelected.indexOf(value);
    if (index == -1) {
      this.memoryManagementSelected.push(value);
    }
    else {
      this.memoryManagementSelected.splice(index, 1);
    }
  }
  monitoringList: string[];
  monitoringSelected = [];
  handleMonitoring(value) {
    let index = this.monitoringSelected.indexOf(value);
    if (index == -1) {
      this.monitoringSelected.push(value);
    }
    else {
      this.monitoringSelected.splice(index, 1);
    }
  }
  loggingList: string[];
  loggingSelected = [];
  handleLogging(value) {
    let index = this.loggingSelected.indexOf(value);
    if (index == -1) {
      this.loggingSelected.push(value);
    }
    else {
      this.loggingSelected.splice(index, 1);
    }
  }
  tracingList: string[];
  tracingSelected = [];
  handleTracing(value) {
    let index = this.tracingSelected.indexOf(value);
    if (index == -1) {
      this.tracingSelected.push(value);
    }
    else {
      this.tracingSelected.splice(index, 1);
    }
  }
  apiAnalyticsList: string[];
  apiAnalyticsSelected = [];
  handleApiAnalytics(value) {
    let index = this.apiAnalyticsSelected.indexOf(value);
    if (index == -1) {
      this.apiAnalyticsSelected.push(value);
    }
    else {
      this.apiAnalyticsSelected.splice(index, 1);
    }
  }
  alertsList: string[];
  alertsSelected = [];
  handleAlerts(value) {
    let index = this.alertsSelected.indexOf(value);
    if (index == -1) {
      this.alertsSelected.push(value);
    }
    else {
      this.alertsSelected.splice(index, 1);
    }
  }

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


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private authenticationService: AuthenticationService) {

    this.sampleForm = this.formBuilder.group({
      platform: [],
      database: [],
      analytics: [],
      streaming: [],
      messaging: [],
      serverless: [],
      integration: [],
      schemaDefinition: [],
      imageBuild: [],
      cicd: [],
      containerOrchestration: [],
      serviceDiscovery: [],
      rpc: [],
      serviceMesh: [],
      apiGateway: [],
      hostManagement: [],
      containerRegistry: [],
      security: [],
      keyManagement: [],
      memoryManagement: [],
      monitoring: [],
      logging: [],
      tracing: [],
      apiAnalytics: [],
      alerts: []
    });
  }

  ngOnInit() {
    if (this.authenticationService.sampleData1 == null) {
      this.toast.error("Please submit portfolio details first ");
      this.router.navigate(['portfolio-details']);
    }

    this.platformList = this.authenticationService.platformList;
    this.databaseList = this.authenticationService.databaseList;
    this.analyticsList = this.authenticationService.analyticsList;
    this.streamingList = this.authenticationService.streamingList;
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

  checkvalue = "etsting";
  get f() { return this.sampleForm.controls; }

  onSubmit() {

    //platform
    if (this.platformSelected.includes('Other')) {
      this.platformOther == "" ? this.platformSelected.splice(this.platformSelected.indexOf('Other'), 1)
        : this.platformSelected.splice(this.platformSelected.indexOf('Other'), 1, this.platformOther);
    }
    this.sampleForm.controls['platform'].setValue(this.platformSelected);
    this.toBe.platform = this.f.platform.value.toString();

    //database
    if (this.databaseSelected.includes('Other')) {
      this.databaseOther == "" ? this.databaseSelected.splice(this.databaseSelected.indexOf('Other'), 1)
        : this.databaseSelected.splice(this.databaseSelected.indexOf('Other'), 1, this.databaseOther);
    }
    this.sampleForm.controls['database'].setValue(this.databaseSelected);
    this.toBe.database = this.f.database.value.toString();

    //analytics
    if (this.databaseSelected.includes('Other')) {
      this.analyticsOther == "" ? this.analyticsSelected.splice(this.analyticsSelected.indexOf('Other'), 1)
        : this.analyticsSelected.splice(this.analyticsSelected.indexOf('Other'), 1, this.analyticsOther);
    }
    this.sampleForm.controls['analytics'].setValue(this.analyticsSelected);
    this.toBe.analytics = this.f.analytics.value.toString();

    //streaming
    if (this.streamingSelected.includes('Other')) {
      this.streamingOther == "" ? this.streamingSelected.splice(this.serverlessSelected.indexOf('Other'), 1)
        : this.streamingSelected.splice(this.serverlessSelected.indexOf('Other'), 1, this.streamingOther);
    }
    this.sampleForm.controls['streaming'].setValue(this.streamingSelected);
    this.toBe.streaming = this.f.streaming.value.toString();

    //messaging
    if (this.messagingSelected.includes('Other')) {
      this.messagingOther == "" ? this.messagingSelected.splice(this.messagingSelected.indexOf('Other'), 1)
        : this.messagingSelected.splice(this.messagingSelected.indexOf('Other'), 1, this.messagingOther);
    }
    this.sampleForm.controls['messaging'].setValue(this.messagingSelected);
    this.toBe.messaging = this.f.messaging.value.toString();

    //serverless
    if (this.serverlessSelected.includes('Other')) {
      this.serverlessOther == "" ? this.serverlessSelected.splice(this.serverlessSelected.indexOf('Other'), 1)
        : this.serverlessSelected.splice(this.serverlessSelected.indexOf('Other'), 1, this.serverlessOther);
    }
    this.sampleForm.controls['serverless'].setValue(this.serverlessSelected);
    this.toBe.serverless = this.f.serverless.value.toString();

    //integration
    if (this.integrationSelected.includes('Other')) {
      this.integrationOther == "" ? this.integrationSelected.splice(this.integrationSelected.indexOf('Other'), 1)
        : this.integrationSelected.splice(this.integrationSelected.indexOf('Other'), 1, this.integrationOther);
    }
    this.sampleForm.controls['integration'].setValue(this.integrationSelected);
    this.toBe.integration = this.f.integration.value.toString();

    //schemaDefinition
    if (this.schemaDefinitionSelected.includes('Other')) {
      this.schemaDefinitionOther == "" ? this.schemaDefinitionSelected.splice(this.schemaDefinitionSelected.indexOf('Other'), 1)
        : this.schemaDefinitionSelected.splice(this.schemaDefinitionSelected.indexOf('Other'), 1, this.schemaDefinitionOther);
    }
    this.sampleForm.controls['schemaDefinition'].setValue(this.schemaDefinitionSelected);
    this.toBe.schemaDefinition = this.f.schemaDefinition.value.toString();

    //imageBuild
    if (this.imageBuildSelected.includes('Other')) {
      this.imageBuildOther == "" ? this.imageBuildSelected.splice(this.imageBuildSelected.indexOf('Other'), 1)
        : this.imageBuildSelected.splice(this.imageBuildSelected.indexOf('Other'), 1, this.imageBuildOther);
    }
    this.sampleForm.controls['imageBuild'].setValue(this.imageBuildSelected);
    this.toBe.imageBuild = this.f.imageBuild.value.toString();

    //cicd
    if (this.cicdSelected.includes('Other')) {
      this.cicdOther == "" ? this.cicdSelected.splice(this.cicdSelected.indexOf('Other'), 1)
        : this.cicdSelected.splice(this.cicdSelected.indexOf('Other'), 1, this.cicdOther);
    }
    this.sampleForm.controls['cicd'].setValue(this.cicdSelected);
    this.toBe.cicd = this.f.cicd.value.toString();

    //containerOrchestration
    if (this.containerOrchestrationSelected.includes('Other')) {
      this.containerOrchestrationOther == "" ? this.containerOrchestrationSelected.splice(this.containerOrchestrationSelected.indexOf('Other'), 1)
        : this.containerOrchestrationSelected.splice(this.containerOrchestrationSelected.indexOf('Other'), 1, this.containerOrchestrationOther);
    }
    this.sampleForm.controls['containerOrchestration'].setValue(this.containerOrchestrationSelected);
    this.toBe.containerOrchestration = this.f.containerOrchestration.value.toString();

    //serviceDiscovery
    if (this.serviceDiscoverySelected.includes('Other')) {
      this.serviceDiscoveryOther == "" ? this.serviceDiscoverySelected.splice(this.serviceDiscoverySelected.indexOf('Other'), 1)
        : this.serviceDiscoverySelected.splice(this.serviceDiscoverySelected.indexOf('Other'), 1, this.serviceDiscoveryOther);
    }
    this.sampleForm.controls['serviceDiscovery'].setValue(this.serviceDiscoverySelected);
    this.toBe.serviceDiscovery = this.f.serviceDiscovery.value.toString();

    //rpc
    if (this.remoteProcedureCellsSelected.includes('Other')) {
      this.rpcOther == "" ? this.remoteProcedureCellsSelected.splice(this.remoteProcedureCellsSelected.indexOf('Other'), 1)
        : this.remoteProcedureCellsSelected.splice(this.remoteProcedureCellsSelected.indexOf('Other'), 1, this.rpcOther);
    }
    this.sampleForm.controls['rpc'].setValue(this.remoteProcedureCellsSelected);
    this.toBe.rpc = this.f.rpc.value.toString();

    //serviceMesh
    if (this.serviceMeshSelected.includes('Other')) {
      this.serviceMeshOther == "" ? this.serviceMeshSelected.splice(this.serviceMeshSelected.indexOf('Other'), 1)
        : this.serviceMeshSelected.splice(this.serviceMeshSelected.indexOf('Other'), 1, this.serviceMeshOther);
    }
    this.sampleForm.controls['serviceMesh'].setValue(this.serviceMeshSelected);
    this.toBe.serviceMesh = this.f.serviceMesh.value.toString();

    //apiGateway
    if (this.apiGatewaySelected.includes('Other')) {
      this.apiGatewayOther == "" ? this.apiGatewaySelected.splice(this.apiGatewaySelected.indexOf('Other'), 1)
        : this.apiGatewaySelected.splice(this.apiGatewaySelected.indexOf('Other'), 1, this.apiGatewayOther);
    }
    this.sampleForm.controls['apiGateway'].setValue(this.apiGatewaySelected);
    this.toBe.apiGateway = this.f.messaging.value.toString();

    //hostManagement
    if (this.hostManagementSelected.includes('Other')) {
      this.hostManagementOther == "" ? this.hostManagementSelected.splice(this.hostManagementSelected.indexOf('Other'), 1)
        : this.hostManagementSelected.splice(this.hostManagementSelected.indexOf('Other'), 1, this.hostManagementOther);
    }
    this.sampleForm.controls['hostManagement'].setValue(this.hostManagementSelected);
    this.toBe.hostManagement = this.f.hostManagement.value.toString();

    //containerRegistry
    if (this.containerRegistrySelected.includes('Other')) {
      this.containerRegistryOther == "" ? this.containerRegistrySelected.splice(this.containerRegistrySelected.indexOf('Other'), 1)
        : this.containerRegistrySelected.splice(this.containerRegistrySelected.indexOf('Other'), 1, this.containerRegistryOther);
    }
    this.sampleForm.controls['containerRegistry'].setValue(this.containerRegistrySelected);
    this.toBe.containerRegistry = this.f.containerRegistry.value.toString();

    //security
    if (this.securitySelected.includes('Other')) {
      this.securityOther == "" ? this.securitySelected.splice(this.securitySelected.indexOf('Other'), 1)
        : this.securitySelected.splice(this.securitySelected.indexOf('Other'), 1, this.securityOther);
    }
    this.sampleForm.controls['security'].setValue(this.securitySelected);
    this.toBe.security = this.f.security.value.toString();

    //keyManagement
    if (this.keyManagementSelected.includes('Other')) {
      this.keyManagementOther == "" ? this.keyManagementSelected.splice(this.keyManagementSelected.indexOf('Other'), 1)
        : this.keyManagementSelected.splice(this.keyManagementSelected.indexOf('Other'), 1, this.keyManagementOther);
    }
    this.sampleForm.controls['keyManagement'].setValue(this.keyManagementSelected);
    this.toBe.keyManagement = this.f.keyManagement.value.toString();

    //memoryManagement
    if (this.memoryManagementSelected.includes('Other')) {
      this.memoryManagementOther == "" ? this.memoryManagementSelected.splice(this.memoryManagementSelected.indexOf('Other'), 1)
        : this.memoryManagementSelected.splice(this.memoryManagementSelected.indexOf('Other'), 1, this.memoryManagementOther);
    }
    this.sampleForm.controls['memoryManagement'].setValue(this.memoryManagementSelected);
    this.toBe.memoryManagement = this.f.memoryManagement.value.toString();

    //monitoring
    if (this.monitoringSelected.includes('Other')) {
      this.monitoringOther == "" ? this.monitoringSelected.splice(this.monitoringSelected.indexOf('Other'), 1)
        : this.monitoringSelected.splice(this.monitoringSelected.indexOf('Other'), 1, this.monitoringOther);
    }
    this.sampleForm.controls['monitoring'].setValue(this.monitoringSelected);
    this.toBe.monitoring = this.f.monitoring.value.toString();

    //logging
    if (this.loggingSelected.includes('Other')) {
      this.loggingOther == "" ? this.loggingSelected.splice(this.loggingSelected.indexOf('Other'), 1)
        : this.loggingSelected.splice(this.loggingSelected.indexOf('Other'), 1, this.loggingOther);
    }
    this.sampleForm.controls['logging'].setValue(this.loggingSelected);
    this.toBe.logging = this.f.logging.value.toString();

    //tracing
    if (this.tracingSelected.includes('Other')) {
      this.tracingOther == "" ? this.tracingSelected.splice(this.tracingSelected.indexOf('Other'), 1)
        : this.tracingSelected.splice(this.tracingSelected.indexOf('Other'), 1, this.tracingOther);
    }
    this.sampleForm.controls['tracing'].setValue(this.tracingSelected);
    this.toBe.tracing = this.f.tracing.value.toString();

    //apiAnalytics
    if (this.apiAnalyticsSelected.includes('Other')) {
      this.apiAnalyticsOther == "" ? this.apiAnalyticsSelected.splice(this.apiAnalyticsSelected.indexOf('Other'), 1)
        : this.apiAnalyticsSelected.splice(this.apiAnalyticsSelected.indexOf('Other'), 1, this.apiAnalyticsOther);
    }
    this.sampleForm.controls['apiAnalytics'].setValue(this.apiAnalyticsSelected);
    this.toBe.apiAnalytics = this.f.apiAnalytics.value.toString();

    //alerts
    if (this.alertsSelected.includes('Other')) {
      this.alertsOther == "" ? this.alertsSelected.splice(this.alertsSelected.indexOf('Other'), 1)
        : this.alertsSelected.splice(this.alertsSelected.indexOf('Other'), 1, this.alertsOther);
    }
    this.sampleForm.controls['alerts'].setValue(this.alertsSelected);
    this.toBe.alerts = this.f.alerts.value.toString();




    if(!(this.toBe.platform)) this.toBe.platform = "-";
    if(!(this.toBe.database)) this.toBe.database = "-";
    if(!(this.toBe.analytics)) this.toBe.analytics = "-";
    if(!(this.toBe.streaming)) this.toBe.streaming = "-";
    if(!(this.toBe.messaging)) this.toBe.messaging = "-";
    if(!(this.toBe.serverless)) this.toBe.serverless = "-";
    if(!(this.toBe.integration)) this.toBe.integration = "-";
    if(!(this.toBe.schemaDefinition)) this.toBe.schemaDefinition = "-";
    
    if(!(this.toBe.imageBuild)) this.toBe.imageBuild = "-";
    if(!(this.toBe.cicd)) this.toBe.cicd = "-";
    if(!(this.toBe.containerOrchestration)) this.toBe.containerOrchestration = "-";
    if(!(this.toBe.serviceDiscovery)) this.toBe.serviceDiscovery = "-";
    if(!(this.toBe.serviceMesh)) this.toBe.serviceMesh = "-";
    if(!(this.toBe.apiGateway)) this.toBe.apiGateway = "-";
    if(!(this.toBe.hostManagement)) this.toBe.hostManagement = "-";
    if(!(this.toBe.containerRegistry)) this.toBe.containerRegistry = "-";
    
    if(!(this.toBe.security)) this.toBe.security = "-";
    if(!(this.toBe.keyManagement)) this.toBe.keyManagement = "-";
    if(!(this.toBe.memoryManagement)) this.toBe.memoryManagement = "-";
    if(!(this.toBe.monitoring)) this.toBe.monitoring = "-";
    if(!(this.toBe.logging)) this.toBe.logging = "-";
    if(!(this.toBe.tracing)) this.toBe.tracing = "-";
    if(!(this.toBe.apiAnalytics)) this.toBe.apiAnalytics = "-";
    if(!(this.toBe.alerts)) this.toBe.alerts = "-";


    this.authenticationService.save3(this.toBe);
    this.authenticationService.sendData1().subscribe
  }

}
