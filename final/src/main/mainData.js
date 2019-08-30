import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pokemon from "../pokemon";
import MainView from "./mainView";
import { loadPokemons, setPokemonsData, loadingError } from "../actions";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const count = useSelector(state => state.catched.length);
  const page = useSelector(state => state.page);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight
    )
      return;
    fetchData();
  }

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

  data = data.map(el => (
    <Pokemon
      id={el.id}
      src={el.image}
      name={el.name}
      catched={el.catched || false}
    />
  ));
  return <MainView {...{ loading, data, count }} />;
};

export default Main;
