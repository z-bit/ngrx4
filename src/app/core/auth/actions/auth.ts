import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { Authenticate } from '../models/authenticate';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] LOgin Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: Authenticate
  ) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(
    public payload: { user: User }
  ) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(
    public payload: any
  ) {}
}

export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type Actions
  = Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout
;
