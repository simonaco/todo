import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Observable<Todo[]>;

  constructor(private store: Store<any>) {
    this.todos = store.select('todos');
  }

  addTodo(item) {
    this.store.dispatch({
      type: 'ADD_TODO',
      payload: { value: item.value, completed: false }
    });
  }
  complete(item) {
    this.store.dispatch({
      type: 'COMPLETE_TODO',
      payload: { value: item.value }
    });
  }
}
