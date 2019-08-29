import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pokemon from "../pokemon";
import Layout from "../layout";

import { loadPokemons, setPokemonsData, loadingError } from "../actions";
const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const count = useSelector(state => state.catched.length);
  const page = useSelector(state => state.page++);
  
  async function fetchData() {
    dispatch(loadPokemons());
    const url = `http://localhost:3000/pokemons?_limit=20&_page=${page}`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        dispatch(setPokemonsData(data));
      })
      .catch(err => dispatch(loadingError(err)));
  }
  if (loading && data.length === 0)
    return (
      <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds">
          <h1 className="has-text-centered is-size-1">POKEDEX</h1>
          <p className="has-text-centered">Loading...</p>
        </div>
        <div className="column"></div>
      </div>
    );
  if (data.length === 0) {
    fetchData();
  }
  data = data.map(el => (
    <Pokemon
      id={el.id}
      src={el.image}
      name={el.name}
      catched={el.catched || false}
    />
  ));
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-two-thirds">
        <h1 className="has-text-centered is-size-1">POKEDEX</h1>
        <p className="has-text-centered">You have catched {count} pokemons!</p>
        <br />
        <Layout data={data} />

        <button
          className="button is-large is-fullwidth is-outlined is-info"
          onClick={() => fetchData()}
        >
          Load more
        </button>
      </div>
      <div className="column"></div>
    </div>
  );
};

export default Main;
