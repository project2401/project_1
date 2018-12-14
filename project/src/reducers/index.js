import {combineReducers} from 'redux';

export const initialState = {
    isAuthenticated:false
}

export function authenticated (state = initialState, action){
    switch (action.type){
        case 'IS_AUTH':
            return {
                isAuthenticated: true,
                name: action.name,
                password: action.password
            }
        case 'LOGOUT':
        return{
            isAuthenticated: false
        }
        default:
            return state
    }
}

const reducers = combineReducers({
    authenticated
});

export default reducers;

