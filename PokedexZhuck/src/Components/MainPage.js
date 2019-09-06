import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestPokemons, catchPokemon } from "../redux/actions";
import PokemonCard from "./PokemonCard";
import HeaderMenu from "./HeaderMenu";

const LAST_POKEMON_WITH_AVAILABLE_IMAGE_ID = 719;

export class MainPage extends Component {
  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    this.props.fetchPokemons();
  };

  catchPokemon = (id, name) => {
    this.props.catchPokemon(id, name);
  };

  static defaultProps = {
    fetchPokemons: () => {},
    catchPokemon: () => {}
  };

  render() {
    const ps = this.props.pokemons.map(pokemon => (
      <PokemonCard
        name={pokemon.name}
        id={pokemon.id}
        caught={Object.keys(pokemon).includes("caught")}
        onClick={this.catchPokemon}
      />
    ));
    return (
      <div className={"container text-center"}>
        <HeaderMenu />
        <div className={"row"}>{ps}</div>
        <button
          type="button"
          onClick={this.fetchPokemons}
          style={
            this.props.pokemons.length > 0 &&
            this.props.pokemons[this.props.pokemons.length - 1].id >
              LAST_POKEMON_WITH_AVAILABLE_IMAGE_ID
              ? { display: "none" }
              : { marginBottom: "3%" }
          }
          className={
            this.props.isLoading
              ? "btn btn-outline-secondary btn-lg"
              : "btn btn-outline-primary btn-lg"
          }
        >
          {this.props.isLoading ? "Loading..." : "Load more pokemons"}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPokemons: bindActionCreators(requestPokemons, dispatch),
  catchPokemon: bindActionCreators(catchPokemon, dispatch)
});

const mapStateToProps = state => ({
  page: state.page,
  pokemons: state.pokemons,
  error: state.error,
  loadedAllPokemons: state.loadedAllPokemons,
  isLoading: state.isLoading,
  isCatching: state.isCatching,
  caughtPage: state.caughtPage,
  caughtPokemons: state.caughtPokemons,
  loadedAllCaughtPokemons: state.loadedAllCaughtPokemons,
  currentPokemonInfo: state.currentPokemonInfo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
