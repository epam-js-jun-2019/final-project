import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          catched: 0
        };
    }
    componentDidMount(){
        this.setState({loading:true})
        let url = 'http://localhost:3000/pokemons?catched=true';
        fetch(url)
          .then(response => response.json())
            .then(data=> {let counter = data.length; 
            this.setState({catched:counter});
      })}

    render(){
        return(
        <Container>
    <h2 className="text-center">Welcome to pokedex!</h2>
    <p> Catched: </p>
<ProgressBar variant="success" animated striped now={this.state.catched} label={this.state.catched}/>
<p> Not catched: </p>
<ProgressBar variant="info" animated striped now={1000} label="1000"/>
</Container>
        )
        
    }
}
 
export default Main;