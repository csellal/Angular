import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from 'src/app/Models/Todo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=5';
  constructor(private http: HttpClient, ) { }

  getTodos(): Observable<Todo[]> {
console.log(`${this.url}${this.todoLimit}`);

console.log(this.url + this.todoLimit);
   return  this.http.get<Todo[]>( `${this.url}${this.todoLimit}`);

    // return [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Tree',
    //     completed: false
    //   }
    //   ];
  }
}
