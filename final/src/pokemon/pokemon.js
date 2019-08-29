import React from "react";
import { pokemonCatched } from "../actions";
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Pokemon = ({ id, src, name ,disable}) => {
  const dispatch = useDispatch();
  const clickCatch = e => {
    e.preventDefault();
    dispatch(pokemonCatched(id));
  };
  const catchButton = disable ?
    <button className="button" disabled onClick={clickCatch}>
            Catched !
    </button> :
    <button className="button" onClick={clickCatch}>
            Catch{" me"}
    </button>
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
            {catchButton}
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            <button className="button">
              <Link to={`/profile/${id}`} href="">
                Profile
              </Link>
            </button>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Pokemon;
