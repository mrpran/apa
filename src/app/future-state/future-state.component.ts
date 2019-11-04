import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-future-state',
  templateUrl: './future-state.component.html',
  styleUrls: ['./future-state.component.css']
})
export class FutureStateComponent implements OnInit {

  username = "";
  sampleForm: FormGroup;
  toBe = {
    "platform": "",
    "database": "Oracle",
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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.username = JSON.parse(localStorage.getItem('username'));

  }

  ngOnInit() {
    $(document).ready(function () {
      $('.selectpicker').selectpicker('val', '1');
    });

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


  get f() { return this.sampleForm.controls; }

  onSubmit() {
    this.toBe.platform = this.f.platform.value.toString();
    this.toBe.database = this.f.database.value.toString();
    this.toBe.analytics = this.f.analytics.value.toString();
    this.toBe.streaming = this.f.streaming.value.toString();
    this.toBe.messaging = this.f.messaging.value.toString();
    this.toBe.serverless = this.f.serverless.value.toString();
    this.toBe.integration = this.f.integration.value.toString();
    this.toBe.schemaDefinition = this.f.schemaDefinition.value.toString();
    this.toBe.imageBuild = this.f.imageBuild.value.toString();
    this.toBe.cicd = this.f.cicd.value.toString();
    this.toBe.containerOrchestration = this.f.containerOrchestration.value.toString();
    this.toBe.serviceDiscovery = this.f.serviceDiscovery.value.toString();
    this.toBe.rpc = this.f.rpc.value.toString();
    this.toBe.serviceMesh = this.f.serviceMesh.value.toString();
    this.toBe.apiGateway = this.f.apiGateway.value.toString();
    this.toBe.hostManagement = this.f.hostManagement.value.toString();
    this.toBe.containerRegistry = this.f.containerRegistry.value.toString();
    this.toBe.security = this.f.security.value.toString();
    this.toBe.keyManagement = this.f.keyManagement.value.toString();
    this.toBe.memoryManagement = this.f.memoryManagement.value.toString();
    this.toBe.monitoring = this.f.monitoring.value.toString();
    this.toBe.logging = this.f.logging.value.toString();
    this.toBe.tracing = this.f.tracing.value.toString();
    this.toBe.apiAnalytics = this.f.apiAnalytics.value.toString();
    this.toBe.alerts = this.f.alerts.value.toString();


    this.authenticationService.save3(this.toBe);
    //this.router.navigate(['future-state']);

    this.authenticationService.sendData().subscribe(
      data => {
        console.log(data.message);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

}
