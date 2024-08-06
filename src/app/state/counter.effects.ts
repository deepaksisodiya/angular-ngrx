// src/app/state/effects/counter.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MyApiService } from '../services/api.service';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadCounter, loadCounterSuccess, loadCounterFailure } from './counter.actions';

// mapping to a different action
export const loadCounter2 = createEffect(
    (actions$ = inject(Actions), usersService = inject(MyApiService)) => {
        return actions$.pipe(
        ofType(loadCounter),
        exhaustMap(() => {
            return usersService.get('counter').pipe(
            map((counter: any) => {
                console.log(counter);
                return loadCounterSuccess({counter: counter})
            }),
            catchError(error => of(loadCounterFailure({ error })))
            );
        })
        );
    },
    { functional: true }
);
