// src/app/state/effects/counter.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MyApiService } from '../services/api.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loadCounter, loadCounterSuccess, loadCounterFailure } from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private apiService: MyApiService) {}

  loadCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCounter),
      mergeMap(() =>
        this.apiService.get<number>('counter').pipe(
          map(counter => loadCounterSuccess({ counter })),
          catchError(error => of(loadCounterFailure({ error })))
        )
      )
    )
  );
}
