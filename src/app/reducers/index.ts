import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Todo } from '../todo.model';
type Action = TodoAdded | TodoCompleted;

export interface State {
  todos: Todo[];
}

//actions
export type TodoAdded = { type: 'ADD_TODO'; payload: Todo };
export type TodoCompleted = { type: 'TOGGLE_TODO'; payload: Todo };

export const reducers = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.value === action.payload.value
            ? { ...todo, completed: !todo.completed }
            : todo
      );
    default:
      return state;
  }
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
