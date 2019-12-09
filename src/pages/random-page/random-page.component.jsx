import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeWord } from '../../utils/utilities';
import './random-page.styles.scss';

class RandomPage extends React.Component {
  static propTypes = {
    fetchRandomPokemonAsync: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
  };

  static defaultProps = {
    pokemon: {
      owner: 'none',
      name: 'name',
      status: 'status',
      captureDate: 'capture date'
    },
    isFetching: false
  };

  state = {
    pokemon: {
      owner: 'none',
      name: 'name',
      status: 'status',
      captureDate: 'capture date'
    },
    isFetching: true
  };

  componentDidMount() {
    const { fetchRandomPokemonAsync } = this.props;
    fetchRandomPokemonAsync();
  }

  componentDidUpdate(prevProps) {
    const { pokemon, isFetching } = this.props;

    if (prevProps.pokemon !== pokemon) {
      this.setState({ pokemon, isFetching });
    }
  }

  render() {
    const {
      pokemon: { owner, photoId, name, status, captureDate },
      isFetching
    } = this.state;
    return isFetching ? (
      <div />
    ) : (
      <div style={{ position: 'relative' }}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(../../assets/images/pokemons-images/${photoId}.png)`
          }}
        />
        <div className='pokemon-info'>
          <h1>{capitalizeWord(name)}</h1>
          <img
            className='pokemon-image'
            src={`../../assets/images/pokemons-images/${photoId}.png`}
            alt='pokemon'
          />
          <span>
            Owner: <span className='focus'>{owner}</span>
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
