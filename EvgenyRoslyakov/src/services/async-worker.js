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

    const postData = async function(body) {
        console.log('async postData()');
        const resp = await fetch(`${apiUrl}catchedPokemons`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
        const result = await resp.json();
        console.log(result);
    }

    const getDataById = function(category, id) {
        return getData(`${category}/${id}`);
    };

    const getLimitedData = function(page, limit) {
        return getData(`pokemons?_page=${page}&_limit=${limit}`);
    };

    return {
        getData,
        getLimitedData,
        getDataById,
        postData
    };
};

export default AsyncProvider();