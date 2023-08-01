import { Component, OnInit } from '@angular/core';
import {TodoModel} from  '../../shared/todo-model.model';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo !: TodoModel[];
  constructor(private apiService: ApiService){}
  
  ngOnInit(): void {

    this.apiService.getAll().subscribe((resp: TodoModel[]) => {    
      this.todo = resp;
      console.log(this.todo);
    })
  }

}
