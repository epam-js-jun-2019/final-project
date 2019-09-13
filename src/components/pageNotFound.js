import React, { Component } from "react";
import Container from 'react-bootstrap/Container';

class PageNotFound extends Component {
  render(){
    return(
      <Container className="d-flex flex-column justify-content-center">
        <h2 className="text-primary text-muted center-block text-center">OOPS! Page Not Found...</h2>
        <div className="d-flex justify-content-center">
          <img src="http://localhost:3001/images/slowpoke.png"/>
        </div>  
      </Container>
    )
  }
}

export default PageNotFound;