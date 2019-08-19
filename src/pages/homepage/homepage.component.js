import React from 'react';

import { connect } from 'react-redux';

import Pokemon from '../../components/pokemon/pokemon.component';
import SearchBox from '../../components/search-box/search-box.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ''
    };
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { collection } = this.props;
    const { searchField } = this.state;
    const filteredPokemons = collection.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='homepage'>
        <div className='search-box__container'>
          <SearchBox
            placeholder='search pokemons'
            handleChange={this.handleChange}
          />
        </div>
        <div className='pokemons'>
          {filteredPokemons.map(({ id, ...collectionProps }) => (
            <Pokemon key={id} id={id} {...collectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons: { pokemons } }) => ({
  collection: pokemons
});

export default connect(mapStateToProps)(HomePage);
