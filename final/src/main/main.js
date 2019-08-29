import React from "react";
import { useSelector } from "react-redux";
import Pokemon from "../pokemon";
import Layout from "../layout";
const Main = () => {
  let data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const count = useSelector(state => state.catched.length);
  if (loading)
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

  data = data.map(el => <Pokemon id={el.id} src={el.image} name={el.name} catched={el.catched || false} />);
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-two-thirds">
        <h1 className="has-text-centered is-size-1">POKEDEX</h1>
        <p className="has-text-centered">You have catched {count} pokemons!</p>
        <Layout data={data} />
      </div>
      <div className="column"></div>
    </div>
  );
};

export default Main;
