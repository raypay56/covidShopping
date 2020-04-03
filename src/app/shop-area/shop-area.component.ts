import { Component, OnInit } from '@angular/core';
import data from 'src/app/data/data.json'
import { GetDataService } from '../get-data.service';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop-area',
  templateUrl: './shop-area.component.html',
  styleUrls: ['./shop-area.component.scss']
})
export class ShopAreaComponent implements OnInit {

  
  conversion:number;
  keys;
  values;
  newCurrency = 'INR';
  public productList:{img:any, alt:string, title:string, price:number}[]= data;
  

  constructor(private getData:GetDataService,
    private http:HttpClient) { }

  ngOnInit(){
    this.getData.convertCurrency()
    .subscribe((data: any)=>{
      this.keys = Object.keys(data.rates);
      console.log(this.keys);
      this.values = Object.values(data.rates) 
    })
}
  changeCurrency(index){
      this.conversion = this.values[index]
      this.newCurrency = this.keys[index]
      console.log(typeof(this.conversion))
      console.log(this.conversion) 
      this.productList = data
      this.productList = this.productList.map(x=>{
        return {...x,price:this.conversion*x.price}
      })
  }

}
