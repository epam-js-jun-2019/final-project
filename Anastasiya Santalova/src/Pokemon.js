import React from 'react';

class Pokemon extends React.Component {

  constructor() {
    super();

    this.state = {
      pokemon: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemons/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ pokemon: data }));

    fetch(`http://localhost:3000/pokemons/${this.props.match.params.id}?_embed=caught`)
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

  render () {

    let pokemonStatus = "не пойман";
    
    if (this.state) {
      if (this.state.active) {
        pokemonStatus = "не пойман";
      } else {
        pokemonStatus = "пойман"
      }
    }

    const pokemon = this.state.pokemon;

    return (

      <div className="pokemon-page d-flex align-items-center justify-content-center">
        
        <div className="pokemon-card row align-items-center">

          <div className="pokemon-card__container_img col-6">
            <img src={`https://raw.githubusercontent.com/epam-js-jun-2019/final-project/master/pokemons/${pokemon.id}.png`} className="pokemon-card__img" alt={`покемон ${pokemon.name}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://raw.githubusercontent.com/epam-js-jun-2019/final-project/master/pokemons/220.png"}}/>
          </div>

          <div className="pokemon-card__container_text col-6">
            <h2 className="pokemon-card__name">{pokemon.name}</h2>
            <p className="pokemon-card__id"><br/><strong>ID:&emsp;&emsp;&emsp;&emsp;</strong> {pokemon.id}</p>
            <p className="pokemon-card__status"><strong>СТАТУС:&emsp;</strong> {pokemonStatus}</p>
          </div>
        
        </div>

      </div>

    );
  }
}

export default Pokemon;