import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const loadCounter = createAction('[Counter] Load');
export const loadCounterSuccess = createAction(
  '[Counter] Load Success',
  props<{ counter: number }>()
);
export const loadCounterFailure = createAction('[Counter] Load Failure', props<{ error: any }>());