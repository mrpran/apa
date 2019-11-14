import { Injectable } from '@angular/core';
import { HttpClientModule, HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class AuthenticationService {
  data = {
    // "Header": "",
    // "Data": "",
    // "Entity": "PortfolioAsIs"
    "asIs": "",
    "toBe": ""
  };

  constructor(private http: HttpClient) { }

  save1(sampleData1) {
    this.data = sampleData1;
  }
  save2(sampleData2) {
    this.data.asIs = sampleData2;
  }
  save3(sampleData3) {
    this.data.toBe = sampleData3;
    console.log(this.data);
  }



  sendData() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.post<any>('http://13.127.38.55:8088/portfolio', this.data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.token}`
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
    const url = "http://35.244.33.205:8080/auth/realms/master/protocol/openid-connect/token";
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
    return this.http.post<any>('http://13.127.38.55:8088/portfolio', this.data, {
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
