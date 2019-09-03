import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    if (this.props.pokemon.id !== undefined) {
    fetch(`http://localhost:3000/pokemons/${this.props.pokemon.id}?_embed=caught`)
      .then(response => response.json())
      .then(data => this.setState({ pokemon: data }))
      .then( () => {
        if (this.state.pokemon.caught.length === 0) {
          this.setState({ active: true });
        } else {
          this.setState({ active: false });
        }
      }
      );
    }
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });

    const { pokemon } = this.props;
    const url = 'http://localhost:3000/caught';
    const data = {name: pokemon.name,
                  id: pokemon.id,
                  pokemonId: pokemon.id,};

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Ошибка:', error));
  }

  render () {
    let pokemonStatus = true;
    
    if (this.state) {
      pokemonStatus = this.state.active;
    }

    const { pokemon } = this.props;
    
    return (
      
      <div className="pokemon card bg-light border-danger mx-auto">

        <div className="row no-gutters">

          <div className="col-5">
            <Link to={`/pokemons/${pokemon.id}`}>
              <img src={`https://raw.githubusercontent.com/epam-js-jun-2019/final-project/master/pokemons/${pokemon.id}.png`} className="card-img" alt={`покемон ${pokemon.name}`}  onError={(e)=>{e.target.onerror = null; e.target.src="/pokemons/no-img.png"}}/>
            </Link>
          </div>

          <div className="col-7">

            <div className="card-body">

              <p className="card-title font-weight-bold">
                <Link to={`/pokemons/${pokemon.id}`} className="text-danger">{pokemon.name}</Link>
              </p>
              <button type="button" className="catch-btn btn btn-warning text-white" onClick={this.handleClick} disabled={pokemonStatus ? false : true}>
                {pokemonStatus ? 'Поймать' : 'Пойман'}
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Card;