import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import PaginationBar from '../pagination_bar/pagination-bar';
import LoadedPokemons from '../loaded-pokemons/loaded-pokemons';
import PokemonCard from '../pokemon-card/pokemon-card';
import AsyncProvider from '../../services/async-module';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('constructor()');
        this.state = { 
                        viewedData: [],
                        currentPage: 1,
                        previewsPerPage: 18,
                        catched: [],
                        whichCard: {},
                        loading: true,
                        error: false
                    };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.getViewedData = this.getViewedData.bind(this);
        this.onPokemonsLoaded = this.onPokemonsLoaded.bind(this);
        this.onError = this.onError.bind(this);
        this.handleCatchClick = this.handleCatchClick.bind(this);
        this.handleOpenFullCard = this.handleOpenFullCard.bind(this);
        this.handleToNextClick = this.handleToNextClick.bind(this);
        this.handleToPrevClick = this.handleToPrevClick.bind(this);
        this.toFormatCatchedData = this.toFormatCatchedData.bind(this);
    }

    getViewedData(page, previews) {
        AsyncProvider.getLimitedData(page, previews)
            .then(this.onPokemonsLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        const {currentPage: page, previewsPerPage: previews} = this.state;
        console.log('componentDidMount()');
        this.getViewedData(page, previews);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.currentPage !== prevState.currentPage) {
            this.setState({ loading: true });
            const {currentPage: page, previewsPerPage: previews} = this.state;
            this.getViewedData(page, previews);
        }
        console.log('componentDidUpdate()');
    }

    onPokemonsLoaded(data) {
        this.setState({ 
            viewedData: data,
            error: false,
            loading: false });
    }

    onError(err) {
        this.setState({ error: true,
                        loading: false })
    }

    toFormatCatchedData(data) {
        const date = (new Date()).toString()
                                 .toLowerCase();
        return {...data,
                catched: true,
                date: date.slice(4, 21)};
    }

    handleCatchClick(e, pokemon) {
        e.stopPropagation();
        const newCatched = this.toFormatCatchedData(pokemon);
        this.setState(state => ({
            catched: [...state.catched, newCatched]
        }));
    }

    handleOpenFullCard(id) {
        AsyncProvider.getDataById(id)
                     .then(data => this.setState({ whichCard: data }));
    }

    handleToNextClick() {
        const maxPage = Math.floor(949 / this.state.previewsPerPage) + 1;
        const nextPage = (this.state.currentPage > maxPage) ? 1 
                                                            : this.state.currentPage + 1;
        this.setState( { currentPage: nextPage }) ;
    }

    handleToPrevClick() {
        const maxPage = Math.floor(949 / this.state.previewsPerPage) + 1;
        const prevPage = (this.state.currentPage <= 1) ? maxPage
                                                       : this.state.currentPage - 1;
        this.setState( { currentPage: prevPage }) ;
    }

    render() {
        console.log('render()');
        console.log('loading:', this.state.loading);
        console.log(this.state.currentPage);
        return (
                <div className="pokedex main-container">
                    <AppHeader />
                    {/* <PokemonCard data={this.state.whichCard} /> */}
                    <LoadedPokemons data={this.state.viewedData}
                                  isLoading={this.state.loading}
                                  isError={this.state.error}
                                  onCatch={this.handleCatchClick}
                                  onOpen={this.handleOpenFullCard} />
                    <PaginationBar page={this.state.currentPage}
                                   toNext={this.handleToNextClick}
                                   toPrev={this.handleToPrevClick} />
                </div>
        )
    }
}

export default App;