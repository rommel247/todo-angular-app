import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { TodoInterface} from '../shared/todo-interface';
import {TodoModel} from '../shared/todo-model.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { } 

   getSampleDataFromJson(): Observable<TodoModel>{
    return this.httpClient.get<any>('http://localhost:3001/api/todo/getall')
    .pipe(
      map((response: any) => {
        return{
          id: response.id,
          title: response.title,
          description: response.description,
          isCompleted: response.isCompleted
        } as TodoModel;
      })
    );
  }

  getAll(): Observable<TodoModel[]>{
    return this.httpClient.get<any[]>('http://localhost:3001/api/todo/getall');
  }

  //this for POST Http Action
  public createTodo(newtodo: TodoInterface): Observable<any>{
    var returntitle: string;
    const url = "http://localhost:3001/api/todo/getall";
    const body = {title : newtodo.title,
    description : newtodo.description}
    return this.httpClient.post<TodoInterface>(url,body) }
}
