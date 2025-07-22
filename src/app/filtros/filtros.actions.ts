import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const filtrar = createAction('[filtro Component] Configurar Filtro',
    props<{ filtro: filtrosValidos }> () 
);
