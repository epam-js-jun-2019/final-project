import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          caught: 0
        };
    }

  componentDidMount(){
    this.setState({loading:true})
    let url = 'http://localhost:3000/pokemons?caught=true';
    fetch(url)
      .then(response => response.json())
        .then(data=> {let counter = data.length; 
        this.setState({caught:counter});
      }
    )
  }

  render(){
    return(
      <Container className="d-flex flex-column">
        <h2 className="text-center p-2">Welcome to pokedex!</h2>
        <h4 className="pt-3 pb-3">Caught: </h4>
        <ProgressBar variant="success" animated striped now={this.state.caught} label={this.state.caught}/>
        <h4 className="pt-3 pb-3"> Not caught: </h4>
        <ProgressBar variant="info" animated striped now={949} label="949"/>
        <div className="cantainer-fluid d-flex align-self-center p-5"><img src="http://localhost:3001/images/pikachu.png"/></div>
      </Container>
    )
  }
}
 
export default Main;