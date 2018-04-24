import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url:string = 'practy-project.herokuapp.com';
  constructor(
    private http:HttpClient
  ) { }
  
  getToken() {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/login`)
        .subscribe(data => {
          resolve(data);
        },err => {
          reject(err);
        })
    })
  }

  login(token,data) {
    return new Promise((resolve,reject) => {
      this.http.post(`${this.url}/login`,token+data)
        .subscribe(resp => {
          resolve(resp);
        },err => {
          reject(err);
        })
    })
  }

  logout(token){
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/logout`)
        .subscribe( data => {
          resolve(data);
        },err => { 
          reject(err);
        })
    });
  }
}
