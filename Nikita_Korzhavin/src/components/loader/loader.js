import React from 'react';


export  const Loader = ( props ) => {
  const  length  = props.length;
  const isFetching = props.isFetching || false;

  return (
    <>
    { isFetching && length === 0 && (<h2 key="loader">Loading...</h2>) }
    { !isFetching && length === 0 && <h2>Empty.</h2> }
    </>
  )
}
