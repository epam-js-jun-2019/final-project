export function catchPokemon(id, name, img){
    const today = new Date();
    fetch('http://localhost:3000/caught_pokemons', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, name, img, capture_date: today})
        })
        .then(response => response.json())
        .then(data => {
            this.setState({caught:true})
        })
        .catch(error => {
            console.log(error)
        });
}