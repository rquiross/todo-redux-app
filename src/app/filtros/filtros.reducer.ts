import { createReducer, on } from '@ngrx/store';
import * as action from './filtros.actions';
 // Import the enum or object representing valid filters

export type EstadoFiltro = action.filtrosValidos; // Define the state type as filtrosValidos

const   initialState: EstadoFiltro ='todos' as action.filtrosValidos; // Default filter

export const filtroReducer = createReducer(
  initialState,
  on(action.filtrar, (state, { filtro }) => filtro) // Ensure the returned value matches the state type
);