import React from 'react';
import PropTypes from 'prop-types';

import './Random-page.styles.scss';

class RandomPage extends React.Component {
  static propTypes = {
    getPokemonsAsync: PropTypes.func.isRequired,
    pokemon: PropTypes.object,
    isLoading: PropTypes.bool
  };
  capitalizeWord = word => {
    const newWord = word.split('')[0].toUpperCase() + word.slice(1);
    return newWord;
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
    const { getPokemonsAsync } = this.props;
    getPokemonsAsync();
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
      <div style={{ fontSize: '15rem', backgroundColor: 'green' }}>
        Loading pokemons...
      </div>
    ) : (
      <div style={{ position: 'relative' }}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`
          }}
        />
        <div className='pokemon-info'>
          <h1>{this.capitalizeWord(name)}</h1>
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
