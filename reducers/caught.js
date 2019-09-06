import { handleActions } from 'redux-actions';

import { loadStart, dataRecieved, errorOccured, countRecieved, caughtReset } from '../actions/caught'

const initialState = {
    loading: false,
    caught: [],
    error: false,
    page: 1, 
    total: null
}

export const reducer = handleActions({
    [loadStart]: (state) => {
        return{
            ...state,
            loading:true,
        }
    },
    [countRecieved]: (state, action) => {
        const data = action.payload;
        return{
            ...state,
            total: data,
            loading: false
        }
    },
    [dataRecieved]: (state, action) => {
        const data = action.payload;
        return{
            ...state,
            caught: [...state.caught, ...data],
            page: state.page+1,
            loading: false,
        }
    },
    [errorOccured]: (state) => {
        return{
            ...state,
            loading:false,
            error:true
        }
    },
    [caughtReset]: (state) => {
        return{
            ...state,
            caught:[],
            page:1
        }
    }
}, initialState)