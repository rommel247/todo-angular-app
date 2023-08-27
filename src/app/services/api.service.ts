import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoInterface } from '../shared/todo-interface';
import { TodoModel } from '../shared/todo-model.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //write local variable of string type
  BaseApi: string = "http://localhost:3001/";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<TodoModel[]> {
    return this.httpClient.get<any[]>(`${this.BaseApi}api/todo/getall`);
  }

  //this for POST Http Action
  public createTodo(newtodo: TodoModel): Observable<any> {
    var returntitle: string;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.BaseApi}api/todo/add`;
    const body = {
      title: newtodo.title,
      description: newtodo.description
    }
    return this.httpClient.post<TodoModel>(url, body)
  }


}
