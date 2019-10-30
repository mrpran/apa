import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class AuthenticationService {
  data = {
    "Header": "",
    "Data": "",
    "Entity": "PortfolioAsIs"
  };

  constructor(private http: HttpClient) { }

  save1(sampleData1) {
    this.data.Header = sampleData1;
  }


  sendData(sampleData2) {
    this.data.Data = sampleData2;
    console.log(this.data);
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.post<any>('http://15.206.73.229:8086/portfolio', this.data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.token}`
      })
    });



  }



  login(username: string, password: string) {
    return this.http.post<any>('http://15.206.73.229:8085/authenticate', { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('username', JSON.stringify(username));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
  }


}
