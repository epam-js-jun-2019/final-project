import React from "react";
import { pokemonCatched } from "../actions";
import { useDispatch } from "react-redux";

const Pokemon = ({ id, src, name, disable }) => {
  const dispatch = useDispatch();
  const clickCatch = e => {
    e.preventDefault();
    dispatch(pokemonCatched(id));
  };
  return (
    <div className="card" key={id}>
      <div className="card-content ">
        <img src={src} alt="" />
        <p className="has-text-centered is-uppercase has-text-weight-semibold">
          {name}
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <a href="" onClick={clickCatch}>
              Catch
            </a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            <a href="">Profile</a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Pokemon;
