import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import PageIndex from '../pages/page-index';
import PageCatched from '../pages/page-catched';
import PageCard from '../pages/page-card';
import AsyncProvider from '../../services/async-module';
import './app.css';
import ErrorMessage from '../error-message/error-message';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('constructor()');
        this.state = { 
                        viewedData: [],
                        catchedData: [],
                        viewedPage: 1,
                        previewsPerPage: 18,
                        loading: true,
                        error: false
                    };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.getViewedData = this.getViewedData.bind(this);
        this.onPokemonsLoaded = this.onPokemonsLoaded.bind(this);
        this.onError = this.onError.bind(this);
        this.handleCatchClick = this.handleCatchClick.bind(this);
        this.handleToNextClick = this.handleToNextClick.bind(this);
        this.handleToPrevClick = this.handleToPrevClick.bind(this);
        this.toFormatCatchedData = this.toFormatCatchedData.bind(this);
        this.getMaxPage = this.getMaxPage.bind(this);
        this.isCatched = this.isCatched.bind(this);
    }

    getViewedData(page, previews) {
        AsyncProvider.getLimitedData(page, previews)
            .then(this.onPokemonsLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        const {viewedPage: page, previewsPerPage: previews} = this.state;
        console.log('componentDidMount()');
        this.getViewedData(page, previews);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.viewedPage !== prevState.viewedPage) {
            this.setState({ loading: true });
            const {viewedPage: page, previewsPerPage: previews} = this.state;
            this.getViewedData(page, previews);
        }
        console.log('componentDidUpdate()');
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({ error: true });
    }

    onPokemonsLoaded(data) {
        data.forEach(newItem => {
            if(this.isCatched(newItem.id)) {
                newItem = {...newItem, catched: true};
            }
        });
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
        if(this.isCatched(pokemon.id)) return;
        const newCatched = this.toFormatCatchedData(pokemon);
        this.setState(state => ({
            catchedData: [...state.catchedData, newCatched]
        }));
    }

    getMaxPage(itemsNumber) {
        return Math.floor(itemsNumber / this.state.previewsPerPage) + 1;
    }

    handleToNextClick() {
        const maxPage = this.getMaxPage();
        const nextPage = (this.state.viewedPage >= maxPage) ? 1 
                                                            : this.state.viewedPage + 1;
        this.setState( { viewedPage: nextPage }) ;
    }

    handleToPrevClick() {
        const maxPage = this.getMaxPage();
        const prevPage = (this.state.viewedPage <= 1) ? maxPage
                                                      : this.state.viewedPage - 1;
        this.setState( { viewedPage: prevPage }) ;
    }

    isCatched(id) {
        return this.state.catchedData.some(catched => catched.id === id);
    }

    render() {
        console.log('render()');
        // console.log('loading:', this.state.loading);
        // console.log(this.state.catchedData);
        // console.log(this.state.viewedData);
        if(this.state.error) {
            return <ErrorMessage />
        };
        return (
                <Router>
                    <div className="pokedex main-container">
                        <AppHeader toCatched={() => this.setState({viewedPage: 1})} />
                        <Switch>
                            <Route exact path="/" 
                                   render={() => {
                                            return (
                                                <PageIndex data={this.state.viewedData}
                                                            isLoading={this.state.loading}
                                                            isError={this.state.error} 
                                                            onCatch={this.handleCatchClick}
                                                            page={this.state.viewedPage}
                                                            toNext={this.handleToNextClick}
                                                            pageInfo={[this.state.viewedPage,
                                                                        this.getMaxPage(949)]}
                                                            toPrev={this.handleToPrevClick}/>
                                            )
                                    }} />
                            <Route path="/pokemons/catched" 
                                   render={() => {
                                            return (
                                                <PageCatched data={this.state.catchedData}
                                                            page={this.state.viewedPage}
                                                            toNext={this.handleToNextClick}
                                                            pageInfo={[this.state.viewedPage,
                                                                        this.getMaxPage(this.state.catchedData.length)]}
                                                            toPrev={this.handleToPrevClick}/>
                                            )
                                        }} />
                            <Route path="/pokemons/:id" 
                                   component={PageCard} />
                        </Switch>
                    </div>
                </Router>
        )
    }
}

export default App;