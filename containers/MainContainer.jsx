import React, { Component } from 'react';
import { AppContainer } from '../components/AppContainer/AppContainer'
import { Loading } from '../components/Loading/Loading';
import { Error } from '../components/error/error'
import {load, loadCount, pokemonsReset} from '../actions/pokemons';
import {connect} from 'react-redux';

class MainUnmounted extends Component{
    
    
    componentDidMount(){
        const { loadPokemons, loadPokemonsCount } = this.props;

        loadPokemons();
        loadPokemonsCount();
    }

    handleScroll = () =>{
        const { loadPokemons, loading, pokemons, total } = this.props;
        if(!loading && pokemons.length<total){
            loadPokemons();
        }
    }

    render(){
        const { pokemons, loading, error }=this.props;
        return (
            <>
                { 
                    loading? <Loading /> : error? <Error /> : <AppContainer onScroll={this.handleScroll} pokemons={pokemons} />
                }
            </>
        )
    }

    componentWillUnmount(){
        const { pokemonsReset } = this.props;

        pokemonsReset();
    }
}

function MapStateToProps(state){
    return {
        pokemons: state.pokemons.pokemons,
        loading: state.pokemons.loading,
        total: state.pokemons.total,
        error: state.pokemons.error
    }
}

function MapDispatchToProps(dispatch){
    return{
        loadPokemons: () => dispatch(load()),
        loadPokemonsCount: () => dispatch(loadCount()),
        pokemonsReset: () => dispatch(pokemonsReset()),
    }
}

export const MainContainer = connect(MapStateToProps, MapDispatchToProps)(MainUnmounted);
