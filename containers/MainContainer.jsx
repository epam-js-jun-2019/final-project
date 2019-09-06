import React, { Component } from 'react';
import { App_container } from '../components/app_container/App_container'
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
                {pokemons.length>0 && <App_container onScroll={this.handleScroll} pokemons={pokemons} />}
                {loading && <Loading />}
                {error && <Error />}
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
