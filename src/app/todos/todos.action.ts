import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[todo]Crear todo',
     props<{texto : string}> ());

     export const toggle = createAction(
    '[todo]Toggle todo',
     props<{id : number}> ());

    export const editar = createAction('[todo]Editar todo',
    props<{id: number, texto: string}>());

    export const borrar = createAction('[todo]Borra todo',
    props<{id: number}>());

     export const toggleAll = createAction('[todo]Completado todo',
    props<{completado: boolean}>());

     export const borrarCompletados = createAction('[todo]Completado borrar');
    