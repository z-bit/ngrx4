import * as layoutActions from '../actions/layout';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: layoutActions.Actions) {
  switch (action.type) {
    case layoutActions.OPEN_SIDENAV: {
      return { showSidenav: true };
    }
    case layoutActions.CLOSE_SIDENAV: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
