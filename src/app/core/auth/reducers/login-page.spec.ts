import { reducer } from './login-page';
import * as loginPageReducers from './login-page';
import { Login, LoginSuccess, LoginFailure } from '../actions/auth';
import { Authenticate } from '../models/authenticate';
import { User } from '../models/user';

describe('LoginPageReducer', () => {
  describe('undefined action', () => {
    it('should return the state', () => {
      const action = {} as any;
      const result = reducer(undefined, action);
      expect(result).toMatchSnapshot();
      // actually if the stete is undefined the result should be the initial state
      expect(result).toBe(loginPageReducers.initialState); // jest does not complain
    });
  });
  describe('LOGIN', () => {
    it('should make pending true', () => {
      const user = { username: 'test' } as Authenticate;
      const createAction = new Login(user);
      const expectedResult = {
        error: null,
        pending: true
      };
      const result = reducer(loginPageReducers.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('LOGIN_SUCCESS', () => {
    it('should have no error and no pending state', () => {
      const user = { name: 'test' } as User;
      const createAction = new LoginSuccess({user});
      const expectedResult = {
        error: null,
        pending: false
      };
      const result = reducer(loginPageReducers.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('LOGIN_FAILURE', () => {
    it('should have an error and no pending state', () => {
      const createAction = new LoginFailure('error');
      const expectedResult = {
        error: 'error',
        pending: false
      };
      const result = reducer(loginPageReducers.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
