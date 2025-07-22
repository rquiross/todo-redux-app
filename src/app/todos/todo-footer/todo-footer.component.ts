import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { filtrosValidos, filtrar } from '../../filtros/filtros.actions';
import { borrarCompletados } from '../todos.action';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';

  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  
  pendientes: number = 0; 

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro')
    // .subscribe(filtro => this.filtroActual = filtro);
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
      
  }

  cambiarFiltro(filtro :filtrosValidos){
    this.store.dispatch(filtrar({filtro: filtro }));
  console.log('Filtro seleccionado:', filtro);
  
  }

  limpiarCompletados(){
    this.store.dispatch(borrarCompletados());
  }
}