import { Component, OnInit } from '@angular/core';
import { ApiService} from '../services/api.service';
import { TodoModel } from '../shared/todo-model.model';
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
  todo !: TodoModel[];
  constructor(private apiService: ApiService){}

  ngOnInit() {

    console.log('loading service api')
    this.apiService.getAll().subscribe((resp: TodoModel[]) => {    
      this.todo = resp;
      console.log(this.todo);
    })


    
  }
}
