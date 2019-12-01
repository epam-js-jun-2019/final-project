import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeWord } from '../../utils/utilities';
import './random-page.styles.scss';

class RandomPage extends React.Component {
  static propTypes = {
    getRandomPokemonAsync: PropTypes.func.isRequired,
    pokemon: PropTypes.object,
    isLoading: PropTypes.bool
  };

  state = {
    pokemon: {
      id: 1,
      name: 'name',
      status: 'status',
      captureDate: 'capture date'
    },
    isLoading: true
  };

  componentDidMount() {
    const { getRandomPokemonAsync } = this.props;
    getRandomPokemonAsync();
  }

  componentDidUpdate(prevProps) {
    const { pokemon, isLoading } = this.props;

    if (prevProps.pokemon !== pokemon) {
      this.setState({ pokemon, isLoading });
    }
  }

  render() {
    const {
      pokemon: { id, name, status, captureDate },
      isLoading
    } = this.state;
    return isLoading ? (
      <div />
    ) : (
      <div style={{ position: 'relative' }}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`
          }}
        />
        <div className='pokemon-info'>
          <h1>{capitalizeWord(name)}</h1>
          <img
            className='pokemon-image'
            src={`../../assets/images/pokemons-images/${id}.png`}
            alt='pokemon'
          />
          <span>
            ID: <span className='focus'>{id}</span>
          </span>
          <span>
            Status: <span className='focus'>{status}</span>
          </span>
          {captureDate !== 'none' && (
            <span>
              Capture Date: <span className='focus'>{captureDate}</span>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default RandomPage;
