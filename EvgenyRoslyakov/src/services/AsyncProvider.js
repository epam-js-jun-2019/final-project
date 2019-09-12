function AsyncProvider() {
    const API_URL = 'http://localhost:8087';
    const NUM_OF_PREVIEWS = 18;

    const getData = async function(query) {
        const resp = await fetch(`${API_URL}/${query}`);
        if(!resp.ok) {
            throw new Error(`Couldn't fetch; status ${resp.status}`)
        };
        return await resp.json();
    };

    const getLimitedData = async function(page) {
        const res = await getData(`pokemons?_page=${page}&_limit=${NUM_OF_PREVIEWS}`);
        return res;
    };

    return {
        getData,
        getLimitedData
    };
};

export default AsyncProvider();