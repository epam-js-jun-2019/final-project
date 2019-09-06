import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routing from './Components/Routing';



const App = ({store}) => (
    <Provider store={store} >
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </Provider>
);

App.propTypes = {
    store: PropTypes.shape({
        page: PropTypes.number,
        caughtPage: PropTypes.number,
        isLoading: PropTypes.bool,
        isCatching: PropTypes.bool,
        error: PropTypes.string,
        pokemons: PropTypes.array,
        caughtPokemons: PropTypes.array,
        loadedAllPokemons: PropTypes.bool,
        loadedAllCaughtPokemons: PropTypes.bool,
        currentPokemonInfo: PropTypes.string,
    }),
};

export default App;