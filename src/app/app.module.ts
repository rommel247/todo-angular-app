import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {HousingLocationComponent} from './housing-location/housing-location.component'
@NgModule({
  declarations: [
    AppComponent, HousingLocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
