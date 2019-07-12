import { Component, OnInit } from '@angular/core';
import {Todo} from '../Models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.todoService.getTodos().subscribe(todo => {
        this.todos = todo;
      });
  }

  onOutPutToDo() {
    console.log('emit');
  }

}
