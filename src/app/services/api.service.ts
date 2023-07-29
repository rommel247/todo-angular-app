import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface} from '../shared/todo-interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { } 

  public getSampleDataFromJson(){
    this.httpClient.get('http://localhost:3001/api/todo/getall').subscribe((data=>{
      console.log(data);
    }))
  }

  public createTodo(newtodo: TodoInterface): Observable<any>{
    var returntitle: string;
    const url = "http://localhost:3001/api/todo/getall";
    const body = {title : newtodo.title,
    description : newtodo.description}
    return this.httpClient.post<TodoInterface>(url,body) }
}
