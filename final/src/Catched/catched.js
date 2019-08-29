import React from "react";
import { useSelector } from "react-redux";
import Pokemon from "../pokemon";
import Layout from "../layout";

const Catched = () => {
  const catched = useSelector(state => state.catched);
  const data = useSelector(state => state.data);
  if (!catched.length)
    return (
      <h1 className="has-text-centered is-size-3">
        You haven't got any pokemons yet
      </h1>
    );
  const result = [];
  catched.forEach(catchedEl => {
    const pokemon = data.filter(dataEl => dataEl.id === catchedEl);
    const { id, name, image, disable } = pokemon[0];
    result.push(
      <Pokemon id={id} name={name} src={image} key={id} disable={disable} />
    );
  });
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-two-thirds">
        <h1 className="has-text-centered is-size-3">
          Look at your's awesome pokemons!
        </h1>
        <Layout data={result} />
      </div>
      <div className="column"></div>
    </div>
  );
};

export default Catched;
