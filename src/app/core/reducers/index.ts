import {
  ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { RouterStateUrl } from '../shared/utils';
import * as routerStore from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import * as layoutReducers from '../ngrx-core/reducers/layout';

export interface State {
  layout: layoutReducers.State;
  routerReducer: routerStore.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  layout: layoutReducers.reducer,
  routerReducer: routerStore.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[]
  = !environment.production
  ? [logger, storeFreeze]
  : []
;

export const getLayoutState = createFeatureSelector<layoutReducers.State>('layout');
export const getShowSidenav = createSelector(
  getLayoutState,
  layoutReducers.getShowSidenav
);
