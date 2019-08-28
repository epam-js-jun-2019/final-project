import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";
import {loadPokemons,setPokemonsData,loadingError} from './actions'

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  const { page } = store.getState();
  const url = `http://localhost:3000/pokemons?_limit=20&_page=${page}`
  dispatch(loadPokemons());
  let response = fetch(url)
  fetch(url).then(data => data.json()).then(data => {
    console.log(data)
    dispatch(setPokemonsData(data));
  }).catch(err => dispatch(loadingError));
});

export default store;
