import { Component, OnInit } from '@angular/core';
import {TodoModel} from  '../../shared/todo-model.model';
//import first the service
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo !: TodoModel[];
  //Dependecy Injection (DI)
  constructor(private apiService: ApiService){}
  
  ngOnInit(): void {

    this.apiService.getAll().subscribe((resp: TodoModel[]) => {    
      this.todo = resp;
      console.log(this.todo);
    })
  }

  update(value: string){
    //add to database here
    //refresh the this.todo
console.log(value);
  }
}
