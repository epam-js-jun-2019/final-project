import { connect } from 'react-redux';
import { getPokemonsAsync } from 'Redux/pokemons/pokemons.actions';

import RandomPage from 'Pages/random-page/random-page.component';
const mapStateToProps = ({
  pokemons: { freePokemons, capturedPokemons, isLoading }
}) => ({
  pokemon:
    (Math.random().toFixed(2) * 100) % 3.5 !== 0
      ? freePokemons[
          Math.floor(Math.random() * Math.floor(freePokemons.length))
        ]
      : capturedPokemons[
          Math.floor(Math.random() * Math.floor(capturedPokemons.length))
        ],
  isLoading
});

const mapDispatchToProps = dispatch => ({
  getPokemonsAsync: () => dispatch(getPokemonsAsync())
});

const RandomPageHOC = connect(mapStateToProps, mapDispatchToProps)(RandomPage);

export default RandomPageHOC;
