import * as userActions from './user.actions';
import { User } from '../models/user.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';

export interface UserState {
    user: User | null;
    auth: boolean;
    error: string;
}

const initialState = {
    user: null,
    auth: false,
    error: ''
};



export function userReducer(state= initialState, action: userActions.UserActions) {
    switch (action.type) {
        case userActions.ActionTypes.LogIn:
            return {
                ...state,
                auth: true
            };
        default:
            return state;
    }
}

const getUserState = createFeatureSelector<UserState>('user');

export const getAuth = createSelector(
    getUserState,
    state => state.auth
);

const getUser = createSelector (
    getUserState,
    state => state.user
);
