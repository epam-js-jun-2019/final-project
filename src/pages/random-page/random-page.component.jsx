import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeWord } from '../../utils/utilities';
import './random-page.styles.scss';

class RandomPage extends React.Component {
  static propTypes = {
    fetchRandomPokemonAsync: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getPokemonImgReference: PropTypes.func.isRequired
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
      photoId: null,
      captureDate: 'capture date'
    },
    imgUrl: null,
    isFetching: true
  };

  loadImageUrl = async photoId => {
    const { getPokemonImgReference } = this.props;
    const imgUrl = await getPokemonImgReference(photoId);
    this.setState({ imgUrl });
    return imgUrl;
  };

  componentDidMount() {
    const { fetchRandomPokemonAsync } = this.props;
    fetchRandomPokemonAsync();
  }

  componentDidUpdate(prevProps) {
    const { pokemon, isFetching } = this.props;

    if (prevProps.pokemon !== pokemon) {
      this.setState({ pokemon, isFetching });
      this.loadImageUrl(pokemon.photoId);
    }
  }

  render() {
    const {
      pokemon: { owner, name, status, captureDate },
      isFetching,
      imgUrl
    } = this.state;
    return isFetching && imgUrl === null ? (
      <h1>IS LOADING</h1>
    ) : (
      <div style={{ position: 'relative' }}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        />
        <div className='pokemon-info'>
          <h1>{capitalizeWord(name)}</h1>
          <img className='pokemon-image' src={imgUrl} alt='pokemon' />
          <span>
            Owner: <span className='focus'>{owner || 'none'}</span>
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
