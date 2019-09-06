import React from 'react';
import './App.css';
import Modal from './Modal';

class AddInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = { show: false,
                   pokemonName: this.props.name,
                   imageSrc: this.props.source,
                   pokemonID: this.props.index,
                   pokemonStatus: ''}
    }
  
  showModal = () => {
    this.setState({ show: true });
    fetch('http://localhost:3001/caughtPokemons')
    .then(resp => resp.json())
    .then(data => {
      let text = ' is not caught'
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.state.pokemonID) {   
          text = ' caught';
           break;
        }
      }
      this.setState({pokemonStatus: text});
})

  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
         <Modal show={this.state.show} handleClose={this.hideModal} index={this.state.pokemonID}
                source = {this.state.imageSrc} name = {this.state.pokemonName}
                status = {this.state.pokemonStatus}/>
        <p type="button" onClick={this.showModal} className="addInfo">
          more info
        </p>
      </main>
    );
  }
}

export default AddInfo;
