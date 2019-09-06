import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, id, caught, onClick }) => (
  <div className="col-lg-3 align-items-stretch" style={{ marginBottom: "5%" }}>
    <div className="card mh-110" style={{ padding: "auto" }}>
      <Link
        className="pokemon-info-link my-2 text-decoration-none text-reset"
        to={`/pokemons/${id}`}
      >
        <img
          src={`./pokemons/${id}.png`}
          style={{
            width: "60%",
            height: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"
          }}
          className="card-img-top img-fluid"
        />
      </Link>
      <div className="card-body text-center" style={{ minHeight: "100px" }}>
        <h5 className="card-title" style={{ textAlign: "center" }}>
          {name.toUpperCase()}
        </h5>
        {caught ? (
          <button type="button" className="btn btn-success" disabled>
            Caught
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              onClick(id, name);
            }}
          >
            Catch
          </button>
        )}
      </div>
    </div>
  </div>
);

export default PokemonCard;
