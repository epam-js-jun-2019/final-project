const initialState = {
    category: 'all',
    currentPage: 1,
    viewedContent: []
}

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
        case 'SET_LOADED_POKEMONS':
            return {
                ...state,
                viewedContent: action.payload
            };
        default:
            return state;
    }
}
