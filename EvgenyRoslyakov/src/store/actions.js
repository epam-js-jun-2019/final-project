export const setCategory = (data) => {
    return {
        type: 'SET_CATEGORY',
        payload: data
    }
};

export const setPageNumber = (data) => {
    return {
        type: 'SET_PAGE_NUMBER',
        payload: data
    }
};

export const setLoadedPokemons = (data) => {
    return {
        type: 'SET_LOADED_POKEMONS',
        payload: data
    }
};