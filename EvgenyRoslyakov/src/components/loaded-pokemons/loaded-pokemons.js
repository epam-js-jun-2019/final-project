import React from 'react';
import PokemonsList from '../pokemons-list/pokemons-list';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';

const LoadedPokemons = (props) => {
    const errorMessage = (props.isError &&
                         !props.isLoading) ? <ErrorMessage /> : null;
    const spinner = props.isLoading ? <Spinner /> : null;
    const content = !(props.isError ||
                      props.isLoading) ? <PokemonsList 
                                            data={props.data}
                                            onCatch={props.onCatch}
                                            onOpen={props.onOpen} />
                                       : null;
    return (
        <React.Fragment>
            {errorMessage}
            {spinner}
            {content}
        </React.Fragment>
    )
}

export default LoadedPokemons;