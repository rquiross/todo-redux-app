import { Component } from '@angular/core';
import { toggle, toggleAll } from '../todos.action';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

  private completado :boolean = false;

  constructor(private store: Store<AppState>) {}

  
  
  toggleAll() {
    // Dispatch the toggle action to toggle all todos
    // This action should be defined in your actions file
    // Assuming you have a way to get all todo IDs, you can dispatch the action here
    // For example:
    // this.store.dispatch(toggleAll({ ids: this.getAllTodoIds() }));
   
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({completado: this.completado}));
  }

}
