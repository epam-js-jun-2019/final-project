import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {requestPokemonInfo, catchPokemon} from "../redux/actions";
import HeaderMenu from "./HeaderMenu";

export class PokemonPersonalCard extends Component {
    componentDidMount = () => {
        this.requestPokemonInfo(this.props.match.params.id);
    };

    requestPokemonInfo = id => {
        this.props.requestPokemonInfo(id);
    };

    catchPokemon = (id, name) => {
        this.props.catchPokemon(id, name);
    };

    render() {
        console.info(this.props);
        if (!this.props.currentPokemonInfo) {
            return null;
        }
        const {id, name, caught} = this.props.currentPokemonInfo;
        return (
            <div className={"container"}>
                <HeaderMenu/>
                <div className="mx-auto" style={{width: "60%", marginTop: "5%"}}>
                    <div className="card mh-50" style={{padding: "auto"}}>
                        <img
                            src={`../pokemons/${id}.png`}
                            style={{
                                width: "50%",
                                height: "80%",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "block"
                            }}
                            className="card-img-top img-fluid"
                        />
                        <div
                            className="card-body text-center"
                            style={{minHeight: "100px"}}
                        >
                            <h5 className="card-title" style={{textAlign: "center"}}>
                                {name.toUpperCase()}
                            </h5>
                            {caught ? (
                                <button type="button" className="btn btn-success" disabled>
                                    Caught
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => this.catchPokemon(id, name)}
                                >
                                    Catch
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    requestPokemonInfo: bindActionCreators(requestPokemonInfo, dispatch),
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
)(PokemonPersonalCard);
