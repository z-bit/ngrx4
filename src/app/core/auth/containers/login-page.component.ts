import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '../models/authenticate';
import * as authReducers from '../reducers';
import * as authActions from '../actions/auth';

@Component({
  selector: 'app-login-page',
  template: `
    <app-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async"
    ></app-login-form>
  `
})
export class LoginPageComponent {

  constructor(
    private store: Store<authReducers.State>
  ) {}

  pending$ = this.store.select(authReducers.getLoginPagePending);
  error$ = this.store.select(authReducers.getLoginPageError);

  onSubmit($event: Authenticate) {
    this.store.dispatch(new authActions.Login($event));
  }
}
