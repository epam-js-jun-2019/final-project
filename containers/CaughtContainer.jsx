import React, { Component } from 'react';
import { AppContainer } from '../components/AppContainer/AppContainer'
import { Loading } from '../components/Loading/Loading';
import { EmptyComponent } from '../components/EmptyComponent/EmptyComponent';
import { Error } from '../components/error/error';
import {load, loadCount, caughtReset} from '../actions/caught';
import {connect} from 'react-redux';


export class CaughtUnmounted extends Component{
        
    componentDidMount(){
        const { loadCaught } = this.props;
        const {loadCaughtCount} = this.props;

        loadCaughtCount();
        loadCaught();
    }

    handleScroll = () =>{
        const { loadCaught, loading, pokemons, total} = this.props;
        if(!loading && pokemons.length<total){
            loadCaught();
        }
    }


    render(){
        const { pokemons, loading, total, error }=this.props;
        return (
            <>
            {loading? <Loading />: error? <Error />: total? <AppContainer onScroll={this.handleScroll} pokemons={pokemons} /> : <EmptyComponent />}
            </>
        )
    }

    componentWillUnmount(){
        const { caughtReset } = this.props;

        caughtReset();
    }
}

function MapStateToProps(state){
    return {
        pokemons: state.caught.caught,
        loading: state.caught.loading,
        total: state.caught.total,
        error: state.caught.error
    }
}

function MapDispatchToProps(dispatch){
    return{
        loadCaught: () => dispatch(load()),
        loadCaughtCount: () => dispatch(loadCount()),
        caughtReset: () => dispatch(caughtReset())
    }
}

export const CaughtContainer = connect(MapStateToProps, MapDispatchToProps)(CaughtUnmounted);
