import React, { Component } from 'react';
import { App_container } from '../components/app_container/App_container'
import { Loading } from '../components/Loading/Loading';
import { loadItem } from '../scripts/loadItem';
import { getCollectionLength } from '../scripts/getCollectionLength';

export class CaughtContainer extends Component{
    
    state = {
        pokemons: [],
        loading: false,
        page: 1,
        total:null
    }
    
    componentDidMount(){
        this.loadCustomItem();
        this.getCustomCollectionLength();
    }

    loadCustomItem=()=>{
        const { page } = this.state;
        const request = `http://localhost:3000/caught_pokemons?_page=${page}&_limit=12&_sort=capture_date&_expamd=pokemons`;
        loadItem.bind(this,request)();
    }

    getCustomCollectionLength=()=>{
        const request = `http://localhost:3000/caught_pokemons`;
        getCollectionLength.bind(this, request)();
    }


    handleScroll = () =>{
        const { loading, pokemons, total }=this.state;
        if(!loading && pokemons.length<total ){
            this.loadCustomItem();
        }
    }

    render(){
        const { pokemons, loading }=this.state;
        return (
            <>
                {pokemons.length>0 && <App_container onScroll={this.handleScroll} pokemons={pokemons} />}
                {loading && <Loading />}
            </>
        )
    }
}