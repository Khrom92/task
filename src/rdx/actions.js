import { createActions } from 'redux-actions';
import * as types from './constans';
import axios from 'axios';



export const { saveList, saveUser } = createActions({
    [types.SAVE_LIST]: (list) => (list),
    [types.SAVE_USER]: (users) => (users),
});

export function getList(pageNum) {
    return (dispatch) => {
        axios.get(`/api/users/page/` + pageNum + `/`)
            .then((data) => {
                dispatch(saveList(data.data.users))
            })
            .catch(error => console.error(error));
    }

}

export function addUser (data) {
    return (dispatch) => {
        axios.post(`/api/add`, { data })
            .then((data) => {
                dispatch(saveUser(data.data.data))
            })
            .catch(error => console.error(error));
    }

}
