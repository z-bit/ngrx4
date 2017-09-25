import { Action } from '@ngrx/store';
export interface layoutAction extends Action {
  type: string;
  payload?: any;
}

export const OPEN_SIDENAV = '[Layout] Open Sidenav';
export const CLOSE_SIDENAV = '[Layout] Close Sidenav';

export class OpenSidenav implements layoutAction {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenav implements layoutAction {
  readonly type = CLOSE_SIDENAV;
}

export type Actions
  = OpenSidenav
  | CloseSidenav
;
