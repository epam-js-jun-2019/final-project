import React from 'react';

import './Random-page.styles.scss';

class RandomPage extends React.Component {
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
    }
  };

  componentDidMount() {
    const { getPokemonsAsync } = this.props;
    getPokemonsAsync();
    setTimeout(() => {
      this.setState({ pokemon: this.props.pokemon });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('goodbye');
  }

  render() {
    const {
      pokemon: { id, name, status, captureDate }
    } = this.state;
    return (
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
          {captureDate !== 'none' ? (
            <span>
              Capture Date: <span className='focus'>{captureDate}</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default RandomPage;
