import React from 'react';
import LoadedPokemons from '../loaded-pokemons/loaded-pokemons';
import PaginationBar from '../pagination_bar/pagination-bar';

const PageCatched = (props) => {
    return (
        <React.Fragment>
            <LoadedPokemons data={props.data}
                            isLoading={props.isLoading}
                            isError={props.isError} 
                            onCatch={props.onCatch} />
            <PaginationBar  page={props.page}
                            toNext={props.toNext}
                            pageInfo={props.pageInfo}
                            toPrev={props.toPrev}/>
        </React.Fragment>
    )
}

export default PageCatched;