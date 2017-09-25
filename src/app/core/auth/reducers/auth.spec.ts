import { reducer } from './auth';
import * as authReducers from './auth';
import { Login, LoginSuccess, Logout } from '../actions/auth';
import { User } from '../models/user';
import { Authenticate } from '../models/authenticate';

describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return state', () => {
      const action = {} as any;
      const result = reducer(undefined, action);
      expect(result).toMatchSnapshot();
    });
  });
});


