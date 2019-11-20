import { Injectable } from '@angular/core';
import { HttpClientModule, HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class AuthenticationService {
  platformList = ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud', 'Digital Ocean', 'Oracle Cloud', 'Pivotal Cloud Foundry'];
  databaseList = ['Casandra DB', 'Couchbase', 'IBM DB2', 'Maria DB', 'MongoDB', 'MySQL', 'Dynamo DB', 'Oracle Database', 'Postgres SQL', 'Microsoft SQL Server'];
  analyticsList = ['Hadoop', 'SQL Datawarehouse', 'RedShift', 'Apache Spark'];
  alertsList = ["AWS"]
  apiAnalyticsList = "Amazon,Apigee,Mulesoft".split(',');
  apiGatewayList = "Amazon,Apigee,Mulesoft".split(',');
  cicdList = "Bamboo,Travis,CloudBees,Jenkins,Spinnaker,ContainerOps,Wercker,Bitbucket,GitHub,GitLab,VisualStudioTeamServices".split(',');
  containerOrchestrationList = "AmazonECS,Kubernetes,DockerSwarm,MESOS,Ansible,Puppet,Chef,Teraform".split(',');
  containerRegistryList = "JFrogArtifactory,AmazonECR,AzureRegistry,DockerRegistry,GoogleRegistry".split(',');
  hostManagementList = "Kubernetes,DockerSwarm,AmazonECS".split(',');
  imageBuildList = "Fabric8,Helm,Bitnami".split(',');
  integrationList = "Oracle,Mulesoft,DellBoomi,IBM".split(',');
  keyManagementList = "Keycloak,CyberArk".split(',');
  loggingList = "fluentd,elastic,splunk,logz.io".split(',');
  memoryManagementList = "Redis,MemCache".split(',');
  messagingList = "AmazonSQS,AmazonSNS,Mulesoft".split(',');
  monitoringList = "Prometheus,AWSCloudWatch,Grafana,Instana,Graphite,AppDynamics,DataDog,SignalFX,SysDlg,Dynatrace".split(',');
  rpcList = "REST,gRPC,SOAP".split(',');
  schemaDefinitionList = "RAML,OpenAPI".split(',');
  securityList = "PingIdentity,Auth0,Gigya".split(',');
  serverlessList = "AWSLambda,Fission,Webtask,OperWhisk,Kuberless".split(',');
  serviceDiscoveryList = "NetflixOSSEureka,ApacheZookeeper,Consul,Etcd,SmartStack,VMWareHaret".split(',');
  serviceMeshList = "Istio,Linkerd,GRPC,Envoy,3Scale,F5,NetflixRibbon,Hystrix,NetflixZuul,Kong,Nginx".split(',');
  streamingList = "AmazonKinesis,kafka,RabbitMQ,Storm".split(',');
  tracingList = "Zipkin,OpenTracing,Jaeger,Appdash,CloudSleuth".split(',');





  data = {
    // "Header": "",
    // "Data": "",
    // "Entity": "PortfolioAsIs"
    "asIs": "",
    "toBe": ""
  };
  sampleData1;

  constructor(private http: HttpClient) { }

  save1(sampleData1) {
    this.sampleData1 = sampleData1;
    this.data = sampleData1;
  }
  save2(sampleData2) {
    this.data.asIs = sampleData2;
  }
  save3(sampleData3) {
    this.data.toBe = sampleData3;
  }



  sendData() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.post<any>('http://13.127.205.103:8088/portfolio', this.data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.token}`
      })
    });
  }
  updateData(data) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.put<any>('http://13.127.205.103:8088/portfolio', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.token}`
      })
    });
  }


  getRecord(editId) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.get<any>('http://35.154.177.80:8088/portfolio/' + editId, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.access_token}`
      })
    });

  }

  getRecords() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.get<any>('http://35.154.177.80:8088/portfolio', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.access_token}`
      })
    });
  }

  deleteRecord(id) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.delete<any>('http://35.154.177.80:8088/portfolio/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.access_token}`
      })
    });

  }



  login(username: string, password: string) {
    return this.http.post<any>('http://13.127.38.55:8085/authenticate', { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('username', JSON.stringify(username));
        }
        return user;
      }));
  }



  keycloak_login(username: string, password: string) {
    const url = "http://35.154.177.80:8080/auth/realms/master/protocol/openid-connect/token";
    const body = new HttpParams()
      .set('client_id', "app-portfolio")
      .set('password', password)
      .set('grant_type', "password")
      .set('username', username);
    return this.http.post<any>(url, body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      });
  }

  sendData1() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.post<any>('http://35.154.177.80:8088/portfolio', this.data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.access_token}`
      })
    });
  }






  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
  }


}
