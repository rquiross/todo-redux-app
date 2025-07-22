import { createReducer, on } from '@ngrx/store';
import { borrar, borrarCompletados, crear, editar, toggle, toggleAll} from './todos.action';
import { Todo } from '../footer/models/todo.model';

export const initialState : Todo[]= [
    new Todo ("Salvando el mundo"),
    new Todo ("Siendo feliz"),
    new Todo("Viviendo la vida"),
    new Todo("Un paso a la vez")
];

export const todoReducer = createReducer(
  initialState,
  on(crear,     (state,{texto}) =>[...state, new Todo(texto)]),
  on(toggle,    (state,{id}) =>  state.map(todo => (todo.id === id ? { ...todo, completado: !todo.completado } : todo ))),
  on(editar,    (state,{id,texto}) => state.map(todo => (todo.id === id ? { ...todo, texto  : texto } : todo ))),
  on(borrar,    (state,{id}) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state,{completado}) => state.map(todo => ({ ...todo,completado :completado}))),
  on(borrarCompletados,    (state) => state.filter(todo => !todo.completado )),
  
);