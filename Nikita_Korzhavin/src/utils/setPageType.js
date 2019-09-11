const setPageType = (path)=> {
  let pageType;
  if (path==='/pokemons'){
    pageType = 'pokemons'
  } else if(path==='/catched') {
    pageType = 'catchedPokemons'
  } else {
    pageType = 'pokemon'
  }
  return pageType;
}

export default setPageType;