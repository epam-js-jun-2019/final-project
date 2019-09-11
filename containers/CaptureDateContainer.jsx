import React, { Component } from 'react';
import {pokemonsService} from '../scripts/pokemonsService'
import { CaptureDateView } from '../components/CaptureDateView/CaptureDateView';
import { getDate } from '../scripts/getDate';

export class CaptureDateContainer extends Component{
    state ={
        captureDate: null
    }

    componentDidMount(){
        const { id } = this.props;
        pokemonsService.getCaughtPokemon(id)
        .then(data => {
            if (data.length!=0){
                this.setState({captureDate: data[0].capture_date});
            }
        })
        .catch(error => {
            console.log('Request failed', error);
        });
    }

    render(){
        const { captureDate } = this.state;
        return(
            <>
                {captureDate && <CaptureDateView capture_date={getDate(captureDate)}/>}
            </>
        )
    }


}