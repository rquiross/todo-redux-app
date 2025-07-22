import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./footer/models/todo.model";
import { todoReducer } from "./todos/todos.reducer";
import { filtroReducer } from "./filtros/filtros.reducer";
import { filtrosValidos } from "./filtros/filtros.actions";

export interface AppState {
    todos :Todo[],
    filtro : filtrosValidos
}

export const appReducers :ActionReducerMap<AppState> =  {
    todos: todoReducer,
    filtro: filtroReducer
};