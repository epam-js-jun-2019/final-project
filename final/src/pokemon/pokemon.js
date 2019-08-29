import React from "react";
import { pokemonCatched } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Pokemon = ({ id, src, name, catched }) => {
  const dispatch = useDispatch();
  const clickCatch = e => {
    e.preventDefault();
    dispatch(pokemonCatched(id));
  };

  return (
    <div className="card" key={id}>
      <div className="card-content ">
        <img src={"data:image/png;base64," + src} alt="" />
        <p className="has-text-centered is-uppercase has-text-weight-semibold">
          {name}
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <button className="button is-primary"  onClick={clickCatch} disabled={catched} >
              {catched ? 'Catched !' : 'Catch me' }
            </button>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            <button className="button">
              <Link to={`/profile/${id}`} >Profile</Link>
            </button>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Pokemon;
