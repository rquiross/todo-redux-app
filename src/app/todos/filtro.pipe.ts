import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../footer/models/todo.model';
import { filtrosValidos } from '../filtros/filtros.actions';

@Pipe({
  name: 'filtroTodo',
  standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro:filtrosValidos): Todo[] { {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }       
  }

}
}
