import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as rootReducers from '../../reducers';
import * as authReducers from './auth';
import * as loginPageReducers from './login-page';

export interface AuthState {
  status: authReducers.State;
  loginPage: loginPageReducers.State;
}

export interface State extends rootReducers.State {
  auth: AuthState;
}

export const reducers = {
  status: authReducers.reducer,
  loginPage: loginPageReducers.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);
export const getLoggedIn = createSelector(
  selectAuthStatusState,
  authReducers.getLoggedIn
);
export const getUser = createSelector(
  selectAuthStatusState,
  authReducers.getUser
);
export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  loginPageReducers.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  loginPageReducers.getPending
);

