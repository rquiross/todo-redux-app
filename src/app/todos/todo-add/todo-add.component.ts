import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as actions from '../todos.action';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {

  txtinput : FormControl;
  constructor(private store : Store<[AppState]>){
    this.txtinput = new FormControl('',Validators.required);
  }
  agregar(){
    if (this.txtinput.invalid){return;}
     this.store.dispatch(actions.crear({texto: this.txtinput.value})) 
     this.txtinput.reset();
  }

}
