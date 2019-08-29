import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import {loadPokemons,setPokemonsData,loadingError} from './actions'

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

// store.dispatch(dispatch => {
//   const { page } = store.getState();
//   dispatch(loadPokemons());
//   const url = `http://localhost:3000/pokemons?_limit=20&_page=${page}`
//   fetch(url).then(data => data.json()).then(data => {
//     dispatch(setPokemonsData(data));
//   }).catch(err => dispatch(loadingError(err)));
// });

export default store;
