export function  getPokemonName(id){

    fetch(`http://localhost:3000/pokemons?id=${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                return Promise.resolve(response);
            }
            else {
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({name:data[0].name, img:data[0].img});
        })
        .catch(error => {
            console.log('Request failed', error);
        });
}