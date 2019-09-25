import { INDEX_PAGE_NUM, CATEGORY_ALL } from '../constants/constants';

const initialState = {
    category: CATEGORY_ALL,
    currentPage: INDEX_PAGE_NUM,
    viewedContent: [],
    error: null,
    isLoading: false
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            };
        case 'SET_PAGE_NUMBER':
            return {
                ...state,
                currentPage: action.payload
            };
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                error: null,
                isLoading: true,
                viewedContent: []
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                error: null,
                isLoading: false,
                viewedContent: action.payload
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    };
};
