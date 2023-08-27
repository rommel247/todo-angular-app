import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../shared/todo-model.model';
//import first the service
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList !: TodoModel[];
  todo = new TodoModel();
  //Dependecy Injection (DI)
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.apiService.getAll().subscribe((resp: TodoModel[]) => {
      this.todoList = resp;
      //console.log(this.todo);
    })
  }

  update() {
    this.apiService.createTodo(this.todo).subscribe((resp: TodoModel) => {
      this.todo = resp;
      console.info(`This the result from POST ${resp}`);
      this.refreshList();
    });
  }

  openSelectedList(id: string=""){
    console.log(id);
  }
}
