import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { EventEmitter } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoEvent: EventEmitter<Todo> =  new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('ngIOnInit');
console.log('sdfasdfsdf');




  }

  // ngOnChanges(change:SimpleChange) {

  // }

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
  onToggle(todo) {
    this.todoEvent.emit();
    console.log(todo);
  }

  onDelete(todo) {
    console.log(todo);
  }


}
