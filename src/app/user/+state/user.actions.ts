import { Action } from '@ngrx/store';

export enum ActionTypes {
    LogIn = '[Users] Login'
}

    export class LogIn implements Action {
    readonly type = ActionTypes.LogIn;

}

export type UserActions = LogIn;
