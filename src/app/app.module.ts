import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopAreaComponent } from './shop-area/shop-area.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './get-data.service'

@NgModule({
  declarations: [
    AppComponent,
    ShopAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
