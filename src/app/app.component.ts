import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = new Array();

  addTodo(item) {
    this.todos.push({ value: item.value, completed: false });
  }
  complete(item) {
    this.todos.forEach(todo => {
      if (todo === item) {
        todo.completed = !todo.completed;
      }
    });
  }
}
