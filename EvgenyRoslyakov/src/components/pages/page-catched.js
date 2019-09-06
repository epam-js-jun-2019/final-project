import React, { Component } from 'react';
import PokemonsList from '../pokemons-list/pokemons-list';
import PaginationBar from '../pagination_bar/pagination-bar';
import EmptyMessage from '../empty-message/empty-message';
import LSWorker from '../../services/localstorage-worker';

class PageCatched extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewedCatchedContent: [],
            currentCatchedPage: 1,
            maxCatchedPage: null,
            previewsPerPage: 18
        };
        
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.getCatchedData = this.getCatchedData.bind(this);
        this.getMaxCatchedPage = this.getMaxCatchedPage.bind(this);
        this.handleToNextClick = this.handleToNextClick.bind(this);
        this.handleToPrevClick = this.handleToPrevClick.bind(this);
        this.handleShowCatched = this.handleShowCatched.bind(this);
        this.calcViewedData = this.calcViewedData.bind(this);
        this.setViewedCatchedContent = this.setViewedCatchedContent.bind(this);
        this.hasCatchedData = this.hasCatchedData.bind(this);
    }

    componentDidMount() {
        this.handleShowCatched();
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentCatchedPage } = this.state;        
        if(currentCatchedPage !== prevState.currentCatchedPage) {
            const data = this.getCatchedData();
            const viewedData = this.calcViewedData(data, currentCatchedPage);
            this.setViewedCatchedContent(viewedData);
        }
    }

    handleToNextClick() {
        const { currentCatchedPage, maxCatchedPage } = this.state;
        const nextPage = (currentCatchedPage >= maxCatchedPage) ?
                         1 :
                         currentCatchedPage + 1;
        this.setState({currentCatchedPage: nextPage});
    }

    handleToPrevClick() {
        const { currentCatchedPage, maxCatchedPage } = this.state;
        const prevPage = (currentCatchedPage <= 1) ?
                         maxCatchedPage :
                         currentCatchedPage - 1;
        this.setState({currentCatchedPage: prevPage});
    }

    getCatchedData() {
        return (this.hasCatchedData()) ?
                LSWorker.readLSData('catched') :
                [];
    }

    getMaxCatchedPage(itemsNumber) {
        const maxCatchedPage = Math.floor(itemsNumber / this.state.previewsPerPage) + 1;
        this.setState({maxCatchedPage: maxCatchedPage});
    }

    handleShowCatched() {
        const catchedData = this.getCatchedData();
        console.log('catched number', catchedData.length);
        const maxPage = this.getMaxCatchedPage(catchedData.length);
        if(maxPage <= 1) {
            this.setViewedCatchedContent(catchedData);
        } else {
            const viewedCatchedContent = this.calcViewedData(catchedData, this.state.currentCatchedPage);
            this.setViewedCatchedContent(viewedCatchedContent);
        }
    }

    calcViewedData(data, page) {
        const { previewsPerPage } = this.state;
        const calcViewedData = data.slice((page - 1) * previewsPerPage, previewsPerPage * page);
        return calcViewedData;
    }

    setViewedCatchedContent(data) {
        this.setState({viewedCatchedContent: data});
    }

    hasCatchedData() {
        return !!(LSWorker.readLSData('catched'))
    }

    render() {
        const { viewedCatchedContent, currentCatchedPage, maxCatchedPage } = this.state;
        const message = !(this.hasCatchedData()) ? <EmptyMessage /> : null;
        const content = (this.hasCatchedData()) ?
                        (<React.Fragment>
                            <PokemonsList data={viewedCatchedContent} />
                            <PaginationBar  page={currentCatchedPage}
                                            toNext={this.handleToNextClick}
                                            toPrev={this.handleToPrevClick}
                                            pageInfo={[
                                                currentCatchedPage,
                                                maxCatchedPage
                                            ]} />
                        </React.Fragment>) :
                        null;
        return (
            <div className="pokedex main-container">
                {content}
                {message}
            </div>
        )
    }
}

export default PageCatched;