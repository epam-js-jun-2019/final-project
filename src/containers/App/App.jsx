import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../../components/Navbar/index';
import Container from '../../components/Container/Container';
import Pokemons from '../../components/Pokemons/index';
import Pokemon from '../Pokemon/index';
import Catched from '../../components/CatchedPokemons/index';

export default class App extends React.Component {
  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons();
  }

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Pokemons} />
            <Route path="/pokemons/:id" component={Pokemon} />
            <Route path="/catched" component={Catched} />
          </Switch>
        </Container>
      </>
    );
  }
}
