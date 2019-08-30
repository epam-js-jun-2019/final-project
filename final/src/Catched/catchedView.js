import React from "react";
import Layout from "../layout";


const CatchedView = ({data}) => {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-two-thirds">
        <h1 className="has-text-centered is-size-3">
          Look at your awesome pokemons!
        </h1>
        <Layout data={data} />
      </div>
      <div className="column"></div>
    </div>
  );
};

export default CatchedView;
