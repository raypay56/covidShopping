import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url= "https://api.exchangeratesapi.io/latest?base=INR";

  constructor(private http:HttpClient) { }

  convertCurrency(){
    return this.http.get(this.url)
  }
}
