import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService} from '../services/api.service';
@Component({
  selector: 'app-housing-location',
  template: `
  <br>
    <p>
      housing-location works!
      All code related to TODO list must be here  
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {
  constructor(private apiService: ApiService){}

  ngOnInit() {

    console.log('loading service api')
    //this.apiService.getCountry();
    this.apiService.getSampleDataFromJson();
  }
}
