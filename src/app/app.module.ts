import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {HousingLocationComponent} from './housing-location/housing-location.component';
import { TodoComponent } from './todo/todo/todo.component'
@NgModule({
  declarations: [
    AppComponent, HousingLocationComponent, TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
