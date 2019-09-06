import React, { Component } from 'react';
import PaginationBar from '../pagination_bar/pagination-bar';
import PokemonsList from '../pokemons-list/pokemons-list';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';
import AsyncProvider from '../../services/async-worker';
import LSWorker from '../../services/localstorage-worker';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewedContent: [],
            currentPage: 1,
            previewsPerPage: 18,
            isLoading: false,
            isError: false
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.loadDbData = this.loadDbData.bind(this);
        this.pushLoadedToLS = this.pushLoadedToLS.bind(this);
        this.hasNeededPage = this.hasNeededPage.bind(this);
        this.setViewedContent = this.setViewedContent.bind(this);
        this.onError = this.onError.bind(this);
        this.getMaxPage = this.getMaxPage.bind(this);
        this.handleToNextClick = this.handleToNextClick.bind(this);
        this.handleToPrevClick = this.handleToPrevClick.bind(this);
        this.handleCatchClick = this.handleCatchClick.bind(this);
        this.updateDataToCatched = this.updateDataToCatched.bind(this);
        this.updateCatchedCollection = this.updateCatchedCollection.bind(this);
        this.hasCatchedData = this.hasCatchedData.bind(this);
    }

    componentDidMount() {
        const {currentPage, previewsPerPage} = this.state;
        if(this.hasNeededPage(currentPage)) {
            this.setViewedContent(currentPage);
        } else {
            this.loadDbData(currentPage, previewsPerPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {currentPage, previewsPerPage} = this.state;        
        if(currentPage !== prevState.currentPage) {
            if(this.hasNeededPage(currentPage)) {
                this.setViewedContent(currentPage);
            } else {
                this.loadDbData(currentPage, previewsPerPage);
            }
        }
    }

    loadDbData(page, numOfPreviews) {
        this.setState({isLoading: true});
        AsyncProvider.getLimitedData(page, numOfPreviews)
                     .then(response => this.pushLoadedToLS(response, page))
                     .catch(this.onError)
    }

    pushLoadedToLS(data, key) {
        LSWorker.writeLSData(key, data);
        this.setState({
            viewedContent: data,
            isLoading: false
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
            isLoading: false
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
        console.log('new catched', id);
        const newData = this.updateDataToCatched(dataToChange, id);
        LSWorker.writeLSData(this.state.currentPage, newData);
        this.setViewedContent(this.state.currentPage);
    }

    updateDataToCatched(data, id) {
        return data.map(item => {
            if(item.id === id) {
                item = {
                    ...item,
                    catched: true,
                    date: Date.now()
                };
                this.updateCatchedCollection(item);
            };
            return item;
        })
    }

    updateCatchedCollection(item) {
        const catchedData = (this.hasCatchedData()) ?
                            LSWorker.readLSData('catched') :
                            [];
        catchedData.push(item);
        LSWorker.writeLSData('catched', catchedData);
    }

    hasCatchedData() {
        return !!(LSWorker.readLSData('catched'))
    }

    render() {
        const { viewedContent, currentPage, isError, isLoading } = this.state;
        const errorMessage = (isError && !isLoading) ?
                             <ErrorMessage /> :
                             null;
        const spinner = isLoading ? <Spinner /> : null;
        const content = !(isError || isLoading) ?
                        (<React.Fragment>
                            <PokemonsList data={viewedContent}
                                          onCatch={this.handleCatchClick} />
                            <PaginationBar page={currentPage}
                                           toNext={this.handleToNextClick}
                                           toPrev={this.handleToPrevClick}
                                           pageInfo={[
                                               currentPage,
                                               this.getMaxPage(949)
                                            ]} />
                        </React.Fragment>) : 
                        null;
        return (
            <div className="pokedex main-container">
                {spinner}
                {content}
                {errorMessage}
            </div>
        )
    }
}

export default IndexPage;