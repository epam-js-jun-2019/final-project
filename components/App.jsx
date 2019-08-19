import React, { Component } from 'react';
import { Pockemon_card } from './pockemon_card/Pockemon_card';
import '../src/assets/style.scss';

 

export class App extends Component{
    render() {
        return (
            <>
            <div>
                <h1> Hello, World!</h1>
            </div>
            <Pockemon_card />
            </>
        );
    }
}