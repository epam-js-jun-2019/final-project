import React from 'react';
import PaginationBar from '../pagination_bar/pagination-bar';
import PokemonsList from '../pokemons-list/pokemons-list';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';

const IndexPage = (props) => {
    const errorMessage = (props.isError && !props.isLoading) ?
                         <ErrorMessage /> :
                         null;
    const spinner = props.isLoading ? <Spinner /> : null;
    const content = !(props.isError || props.isLoading) ?
                    (<React.Fragment>
                        <PokemonsList data={props.data}
                                        onCatch={props.onCatch}
                                        onOpen={props.onOpen} />
                        <PaginationBar page={props.page}
                                        toNext={props.toNext}
                                        pageInfo={props.pageInfo}
                                        toPrev={props.toPrev}/>
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

export default IndexPage;