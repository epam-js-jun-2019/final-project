import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PokemonTab from './PokemonTab'
import InfiniteScroll from './InfiniteScroll'
import './styles/Home.css';

const Home = () => (
    <div className="tabs">
        <InfiniteScroll />
    </div>
)

export default Home