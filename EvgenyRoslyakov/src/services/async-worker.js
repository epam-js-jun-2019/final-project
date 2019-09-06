function AsyncProvider() {
    const apiUrl = 'http://localhost:8087/';

    const getData = async function(query) {
        console.log('async getData()');
        const resp = await fetch(`${apiUrl}/${query}`);
        if(!resp.ok) {
            throw new Error(`Couldn't fetch; status ${resp.status}`)
        };
        return await resp.json();
    };

    const getDataById = function(category, id) {
        return getData(`${category}/${id}`);
    };

    const getLimitedData = function(page, limit) {
        return getData(`pokemons?_page=${page}&_limit=${limit}`);
    };

    return {
        getData,
        getLimitedData,
        getDataById
    };
};

export default AsyncProvider();