import React, { Component } from 'react';
import {getCaptureDate} from '../scripts/getCaptureDate'
import { Capture_date_view } from '../components/Capture_date_view/Capture_date_view';
import { getDate } from '../scripts/getDate';

export class CaptureDateContainer extends Component{
    state ={
        captureDate: null
    }

    getCustomCaptureDate = () =>{
        const { id } = this.props;
        getCaptureDate.bind(this,id)();
    }

    componentDidMount(){
        this.getCustomCaptureDate();
    }

    render(){
        const { captureDate } = this.state;
        return(
            <>
                {captureDate && <Capture_date_view capture_date={getDate(captureDate)}/>}
            </>
        )
    }


}