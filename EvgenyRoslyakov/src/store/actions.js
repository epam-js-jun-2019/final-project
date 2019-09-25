import AsyncProvider from '../services/AsyncProvider';
import LSService from '../services/LocalstorageService';

export const setCategory = data => {
    return {
        type: 'SET_CATEGORY',
        payload: data
    }
};

export const setPageNumber = data => {
    return {
        type: 'SET_PAGE_NUMBER',
        payload: data
    }
};

const fetchDataRequest = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
};

const fetchDataFailure = err => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: err
    }
};

export const fetchDataSuccess = data => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: data
    }
};

async function asyncFetchData(page, dispatch) {
    try {
        const data = await AsyncProvider.getLimitedData(page);
        LSService.writeLSData(page, data);
        dispatch(fetchDataSuccess(data));
    } catch (err) {
        dispatch(fetchDataFailure(err.message));
    };
};

export const fetchIndexData = page => dispatch => {
    if(LSService.isInLS(page)) {
        const content = LSService.readLSData(page);
        dispatch(fetchDataSuccess(content));
    } else {
        dispatch(fetchDataRequest());
        asyncFetchData(page, dispatch);
    };
};