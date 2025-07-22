import { Component } from '@angular/core';
import { Todo } from '../../footer/models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { filtrosValidos } from '../../filtros/filtros.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos :Todo[] =[];
  filtroActual:filtrosValidos;

  constructor(private store :Store<AppState>){
      // this.store.select('todos')
      // .subscribe(todos =>this.todos =todos);
      // console.log(this.todos);
      this.store.subscribe(state => {
        this.todos = state.todos;
        this.filtroActual = state.filtro;
      }
      )  
    }

}
