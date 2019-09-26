import { API_URL, PREVIEWS_PER_PAGE } from '../constants/constants';

function AsyncProvider() {
    const getData = async function(query) {
        try {
            const resp = await fetch(`${API_URL}/${query}`);
            return await resp.json();
        } catch(e) {
            throw new Error(`Couldn't fetch`)
        };
    };

    const getLimitedData = async function(page) {
        try {
            const data = await getData(`pokemons?_page=${page}&_limit=${PREVIEWS_PER_PAGE}`);
            return data;
        } catch(err) {
            throw err;
        };
    };

    return {
        getLimitedData
    };
};

export default AsyncProvider();