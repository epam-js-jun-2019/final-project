import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestCaughtPokemons } from "../redux/actions";
import PokemonCard from "./PokemonCard";
import HeaderMenu from "./HeaderMenu";

export class CaughtPokemonsPage extends Component {
  componentDidMount() {
    this.fetchCaughtPokemons();
    console.info(this.props.caughtPage);
  }

  fetchCaughtPokemons = () => {
    this.props.fetchCaughtPokemons();
  };

  static defaultProps = {
    fetchCaughtPokemons: () => {}
  };

  render() {
    const ps = this.props.caughtPokemons.map(pokemon => (
      <PokemonCard
        name={pokemon.name}
        id={pokemon.id}
        caught={Object.keys(pokemon).includes("caught")}
      />
    ));
    console.info(this.props);
    return (
      <div className={"container text-center"}>
        <HeaderMenu />
        <div className={"row"}>{ps}</div>
        <button
          type="button"
          onClick={this.fetchCaughtPokemons}
          style={
            this.props.loadedAllCaughtPokemons
              ? { display: "none" }
              : { marginBottom: "3%" }
          }
          className={
            this.props.isLoading
              ? "btn btn-outline-secondary btn-lg"
              : "btn  btn-outline-primary btn-lg"
          }
        >
          {this.props.isLoading ? "Loading..." : "Load more pokemons"}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCaughtPokemons: bindActionCreators(requestCaughtPokemons, dispatch)
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
  loadedAllCaughtPokemons: state.loadedAllCaughtPokemons
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaughtPokemonsPage);
