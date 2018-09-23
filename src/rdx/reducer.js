import * as types from './constans';
import { handleActions } from 'redux-actions';


const initialState = {
    users: []
};

export default handleActions(
    {
        [types.SAVE_LIST]: (state = initialState, action = {}) => (
            {
                ...state,
                users: [
                    ...action.payload
                ]
            }
        ),
        [types.SAVE_USER]: (state = initialState, action = {}) => (
            {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
        )
    },
    initialState
);