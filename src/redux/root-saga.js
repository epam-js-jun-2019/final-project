import { all, call } from 'redux-saga/effects';
import { pokemonsSagas } from './pokemons/pokemons.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(pokemonsSagas), call(userSagas)]);
}
