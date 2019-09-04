import React from 'react';
import PaginationBar from '../pagination_bar/pagination-bar';
import PokemonsList from '../pokemons-list/pokemons-list';

const IndexPage = (props) => {
    return (
        <React.Fragment>
            <PokemonsList data={props.data}
                            isLoading={props.isLoading}
                            isError={props.isError} 
                            onCatch={props.onCatch}
                            onPreviewClick={props.onPreviewClick} />
            <PaginationBar  page={props.page}
                            toNext={props.toNext}
                            pageInfo={props.pageInfo}
                            toPrev={props.toPrev}/>
        </React.Fragment>
    )
}

export default IndexPage;