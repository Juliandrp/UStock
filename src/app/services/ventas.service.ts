import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VentasService {
<<<<<<< HEAD
  url:string = localStorage.getItem('url');
=======
  url:string = 'http://192.168.0.200:8000';
>>>>>>> 0527ad93c45485d4c43fc6ea990f419d2bb854db

  constructor(
    private http:HttpClient
  ) { }


  sold(data):Promise<any> {
    const head = {
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise((resolve,reject) => {
      this.http.post(`${this.url}/api/ventas`,data,head)
        .subscribe(resp => {
          resolve(resp);
        },err => {
          reject(err);
        })
    })
  }
}
