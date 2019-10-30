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
  myselect = "1";
  sampleForm: FormGroup;

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
      alerts:[]
    });
  }


  get f() { return this.sampleForm.controls; }

  onSubmit() {
    console.log(this.f.collection.value);
  }

}
