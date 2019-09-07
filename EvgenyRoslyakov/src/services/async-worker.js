function AsyncProvider() {
    const API_URL = 'http://localhost:8087/';

    const getData = async function(query) {
        const resp = await fetch(`${API_URL}/${query}`);
        if(!resp.ok) {
            throw new Error(`Couldn't fetch; status ${resp.status}`)
        };
        return await resp.json();
    };

    const getLimitedData = function(page, limit) {
        return getData(`pokemons?_page=${page}&_limit=${limit}`);
    };

    return {
        getData,
        getLimitedData
    };
};

export default AsyncProvider();