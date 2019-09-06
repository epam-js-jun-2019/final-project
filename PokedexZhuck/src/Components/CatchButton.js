import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { catchPokemon } from "../redux/actions";

export class CatchButton extends Component {
  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    this.props.fetchPokemons();
  };

  static defaultProps = {
    fetchPokemons: () => {}
  };

  render() {
    console.info(this.props);
    const ps = this.props.pokemons.map(pokemon => (
      <PokemonCard
        name={pokemon.name}
        id={pokemon.id}
        caught={Object.keys(pokemon).includes("caught")}
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
              ? "btn btn-lg btn-outline-secondary "
              : "btn btn-lg btn-outline-primary"
          }
        >
          {this.props.isLoading ? "Loading..." : "Load more pokemons"}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  catchPokemon: bindActionCreators(catchPokemon, dispatch)
});

const mapStateToProps = state => ({
  page: state.page,
  pokemons: state.pokemons,
  error: state.error,
  loadedAllPokemons: state.loadedAllPokemons,
  isLoading: state.isLoading,
  isCatching: state.isCatching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchButton);
