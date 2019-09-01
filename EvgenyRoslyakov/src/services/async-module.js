function AsyncProvider() {
    const apiUrl = 'http://localhost:8087/';

    const getData = async function(query) {
        const resp = await fetch(`${apiUrl}${query}`);
        if(!resp.ok) {
            throw new Error(`Couldn't fetch; status ${resp.status}`)
        };
        return await resp.json();
    };

    const getAllData = function() {
        return getData('pokemons')
    }

    const getDataById = function(id) {
        return getData(`pokemons/${id}`);
    };

    const getLimitedData = function(limit) {
        return getData(`pokemons?_limit=${limit}`);
    };

    return {
        getAllData,
        getLimitedData,
        getDataById
    };
};

export default AsyncProvider();