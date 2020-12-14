import { createAction, createReducer, on } from '@ngrx/store';

export interface UserState {
    maskUserName: boolean;
}

export const userReducer = createReducer({ maskUserName: false },
    on(createAction('[User] Mask user Name'), state => {
        console.log('[User] Mask user Name original state: ' + JSON.stringify(state));
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
    );