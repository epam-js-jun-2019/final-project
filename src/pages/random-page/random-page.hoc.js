import { connect } from 'react-redux';
import RandomPage from 'Pages/random-page/random-page.component';

const mapStateToProps = ({ pokemons: { freePokemons, capturedPokemons } }) => ({
  pokemon:
    (Math.random().toFixed(2) * 100) % 3.5 !== 0
      ? freePokemons[
          Math.floor(Math.random() * Math.floor(freePokemons['length']))
        ]
      : capturedPokemons[
          Math.floor(Math.random() * Math.floor(capturedPokemons['length']))
        ]
});

const RandomPageHOC = connect(mapStateToProps)(RandomPage);

export default RandomPageHOC;
