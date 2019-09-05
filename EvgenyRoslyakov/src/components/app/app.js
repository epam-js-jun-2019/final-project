import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import PageIndex from '../pages/page-index';
import PageCatched from '../pages/page-catched';
import PageCard from '../pages/page-card';
import AsyncProvider from '../../services/async-worker';
import LSWorker from '../../services/localstorage-worker';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('constructor()');
        this.state = { 
                        viewedContent: [],
                        currentPage: 1,
                        previewsPerPage: 18,
                        loading: false,
                        error: false
                    };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.viewDbData = this.viewDbData.bind(this);
        this.pushLoadedToLS = this.pushLoadedToLS.bind(this);
        this.hasNeededPage = this.hasNeededPage.bind(this);
        this.setViewedContent = this.setViewedContent.bind(this);
        this.onError = this.onError.bind(this);
        this.getMaxPage = this.getMaxPage.bind(this);
        this.handleToNextClick = this.handleToNextClick.bind(this);
        this.handleToPrevClick = this.handleToPrevClick.bind(this);
        this.handleCatchClick = this.handleCatchClick.bind(this);
        this.updateCatchedData = this.updateCatchedData.bind(this);
    }

    componentDidMount() {
        const {currentPage, previewsPerPage} = this.state;
        // 1 check if localStorage has needed page   
        // 2a if it has then update the view 
        // 2b if it hasn't then viewDbData 
        if(this.hasNeededPage(currentPage)) {
            this.setViewedContent(currentPage);
        } else {
            this.viewDbData(currentPage, previewsPerPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {currentPage, previewsPerPage} = this.state;        
        
        if(currentPage !== prevState.currentPage) {
            if(this.hasNeededPage(currentPage)) {
                this.setViewedContent(currentPage);
            } else {
                this.viewDbData(currentPage, previewsPerPage);
            }
        }
    }

    viewDbData(page, numOfPreviews) {
        this.setState({loading: true});
        // 1 request to DB                  
        // 2 push loaded data to LS
        // 3 update view by LS data
        AsyncProvider.getLimitedData(page, numOfPreviews)
                     .then(response => this.pushLoadedToLS(response, page))
                     .catch(this.onError)
    }

    pushLoadedToLS(data, key) {
        LSWorker.writeLSData(key, data);
        this.setState({
            viewedContent: data,
            loading: false
        })
    }

    hasNeededPage(page) {
        return LSWorker.isInLS(page)
    }

    setViewedContent(page) {
        this.setState({
            viewedContent: LSWorker.readLSData(page)
        })
    }

    onError(err) {
        this.setState({
            error: true,
            loading: false
        })
    }

    getMaxPage(itemsNumber) {
        return Math.floor(itemsNumber / this.state.previewsPerPage) + 1;
    }

    handleToNextClick() {
        const maxPage = this.getMaxPage(949);
        const nextPage = (this.state.currentPage >= maxPage) ?
                         1 :
                         this.state.currentPage + 1;
        this.setState({currentPage: nextPage});
    }

    handleToPrevClick() {
        const maxPage = this.getMaxPage(949);
        const prevPage = (this.state.currentPage <= 1) ?
                         maxPage :
                         this.state.currentPage - 1;
        this.setState({currentPage: prevPage});
    }

    handleCatchClick(e, id) {
        e.stopPropagation();
        const dataToChange = LSWorker.readLSData(this.state.currentPage);
        console.log(dataToChange, id);
        const newData = this.updateCatchedData(dataToChange, id);
        LSWorker.writeLSData(this.state.currentPage, newData);
        this.setViewedContent(this.state.currentPage);
    }

    updateCatchedData(data, id) {
        return data.map(item => {
            if(item.id === id) {
                item = {
                    ...item,
                    catched: true,
                    date: Date.now()
                }
            };
            return item;
        })
    }

    render() {
        // console.log('render()');
        // console.log('page', this.state.currentPage);
        // console.log('content', this.state.viewedContent);
        return (
            <Router>
                <AppHeader toCatched={() => this.setState({currentPage: 1})} />
                <Switch>
                    <Route
                     exact path="/"
                     render={() => {
                                return (
                                    <PageIndex 
                                     data={this.state.viewedContent}
                                     isLoading={this.state.loading}
                                     isError={this.state.error}
                                     onCatch={this.handleCatchClick}
                                     page={this.state.currentPage}
                                     pageInfo={[
                                                this.state.currentPage,
                                                this.getMaxPage(949)
                                                ]}
                                     toNext={this.handleToNextClick}
                                     toPrev={this.handleToPrevClick} />
                                    )
                                }} />
                    <Route
                     path="/pokemons/catched" 
                     render={() => {
                            // return (
                            //     <PageCatched 
                            //      data={this.state.catchedData}
                            //      page={this.state.viewedPage}
                            //      pageInfo={[
                            //                 this.state.viewedPage,
                            //                 this.getMaxPage(this.state.catchedData.length)
                            //                 ]}
                            //      toNext={this.handleToNextClick}
                            //      toPrev={this.handleToPrevClick}/>
                            // )               
                            }} />
                    <Route 
                     path="/pokemons/:id"
                     render={(routeProps) => <PageCard page={this.state.currentPage}
                                                       routeProps={routeProps} />} />
                </Switch>
            </Router>
        )
    }
}

export default App;