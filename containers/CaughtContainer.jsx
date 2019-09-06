import React, { Component } from 'react';
import { App_container } from '../components/app_container/App_container'
import { Loading } from '../components/Loading/Loading';
import {Empty_component } from '../components/empty_component/empty_component';
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
        console.log(error);
        return (
            <>
                {!loading && !error && total===0 && <Empty_component />}
                {total>0 && <App_container onScroll={this.handleScroll} pokemons={pokemons} />}
                {loading && <Loading />}
                {error && <Error />}
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
