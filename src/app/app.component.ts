import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './state/counter.actions';
import { AppState } from './state/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ngrx';

  // constructor(private store: Store<AppState>) {}

  // counter$ = this.store.select(state => state.counter);

  // increment() {
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }

  // reset() {
  //   this.store.dispatch(reset());
  // }
}
