import { Component, ElementRef, Input, input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../footer/models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions  from '../todos.action';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  @Input() todo :Todo;
  @ViewChild('inputFisico') txtInputFisico:ElementRef;
  chkCompletado :FormControl;
  txtInput :FormControl;
  editando :boolean =false

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput= new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe( valor => {
     this.store.dispatch(actions.toggle({id: this.todo.id} ));
  }
    );
  }

  editar(){
    this.editando=true
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion(){
    this.editando = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }
    // Dispatch the editar action with the updated text
    this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}));
  } 

  eliminar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

}
