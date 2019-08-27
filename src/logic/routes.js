import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstPage from '../components/firstpage';
import CatchedPokemons from '../components/catchedpage';
import AboutApp from '../components/aboutpage';
import NoMatch from '../components/nomatch';


class Switchpath extends React.Component {
    render(){
    return(
        <Switch>
            <Route exact path = "/" component = {FirstPage} />
            <Route path = "/catched" component = {CatchedPokemons} />
            <Route path = "/about" component = {AboutApp} />
            <Route component = {NoMatch} />
        </Switch>
    );
}}
export default Switchpath;