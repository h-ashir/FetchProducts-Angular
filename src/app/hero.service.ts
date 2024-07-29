import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }
  sendData(data:any){
    console.log(data);
    return this.http.post('api/',data);
  }

  isAdmin(): boolean{
    return true
  }
}
