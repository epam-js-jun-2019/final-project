import React from "react";
import Layout from "../layout";
import Loading from "../loading"

const MainView = ({ loading, data, count }) => {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-two-thirds">
        <h1 className="has-text-centered is-size-1">POKEDEX</h1>
        <div className="has-text-centered">
          {loading && !data.length ? (
            <Loading />
          ) : (
            `You have catched ${count} pokemons!`
          )}
        </div>
        <br />
        <Layout data={data} />
        {data.length ? <Loading /> : null}
      </div>
      <div className="column"></div>
    </div>
  );
};

export default MainView;
