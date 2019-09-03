import React from 'react';
import './App.css';
import Card from './Card';
import { Link } from 'react-router-dom';

class Caught extends React.Component {

  constructor() {
    super();

    this.state = {
      caught: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/caught?_page=1&_limit=30')
      .then(response => response.json())
      .then(data => this.setState({ caught: data }))
      .then(this.setState({ counter: 2 }));
  }

  handleClick() {
    fetch(`http://localhost:3000/caught?_page=${this.state.counter}&_limit=30`)
    .then(response => response.json())
    .then(data => this.setState({ caught: this.state.caught.concat(data) }))
    .then(this.setState({ counter: this.state.counter+1 }));
    
  }

  render () {
    if (this.state.caught.length === 0) {
      return (
        <div className="no-pokemons">
          <img className="no-pokemons_img" src="https://raw.githubusercontent.com/epam-js-jun-2019/final-project/master/pokemons/220.png" alt="no pokemons"></img>
          <p>Вы ещё не поймали ни одного покемона...<br/><br/></p>
          <p>Пожалуйста, вернитесь на <Link to='/' className="text-danger">главную</Link> страницу и поймайте парочку для меня ;)</p>
        </div>
      );
    } else {
      let ifDisabled;
      if (this.state.caught.length < 30) {
        ifDisabled = true;
      } else {
        ifDisabled = false;
      }

      return (
        <div className="main-content">
          <div className="pokemon-list card-columns">
            {this.state.caught.map(pokemon =>
              <Card pokemon = {pokemon} key = {pokemon.id}/>
            )}
          </div>
          <div className="load-more">
            <button className="load-more__btn btn btn-danger" type="button" onClick={this.handleClick} disabled={ifDisabled}>Показать ещё</button>
          </div>
        </div>
      );
    }
  }
}

export default Caught;
