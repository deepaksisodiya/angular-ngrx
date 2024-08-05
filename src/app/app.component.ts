import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, loadCounter } from './state/counter.actions';
import { AppState } from './state/app.state';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MyApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ngrx';
  counter$?: Observable<number>;

  constructor(private store: Store<AppState>, private apiService: MyApiService) {
    this.counter$ = store.select("counter")
  }

  ngOnInit() {
    this.store.dispatch(loadCounter());

    this.apiService.get('counter').subscribe({
      next: (response: any) => {
        console.log('Backend response:', response);
      },
      error: (error) => {
        console.error('Backend error:', error);
      }
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
