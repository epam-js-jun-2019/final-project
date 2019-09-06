import Spinner from 'react-bootstrap/Spinner'
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';

class Loader extends Component {
    render()
{
return(
    <Container className="d-flex justify-content-center" >
<Spinner animation="grow" variant="primary"  /> <h2 className="text-primary">Loading Pokemons... </h2>
</Container>)}
}
export default Loader;

// "top-name center-block text-center bg-primary"