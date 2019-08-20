const getPokemonData = (id = '') => {
  fetch(`http://localhost:8000/pokemons/${id}`)
    .then(res => res.json())
    .then(data => data);
};

export default getPokemonData;
