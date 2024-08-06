import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset, loadCounterSuccess } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => initialState),
  on(loadCounterSuccess, (state, { counter }) => {
    return counter
  })
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}