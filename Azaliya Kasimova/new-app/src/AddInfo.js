import React from 'react';
import './App.css';
import Modal from './Modal';

class AddInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = { show: false,
                   pokemonStatus: '',
                   dateOfCaught: ''}
    }
  
  showModal = () => {
    this.setState({ show: true });
    fetch('http://localhost:3001/caughtPokemons')
    .then(resp => resp.json())
    .then(data => {
      let text = ' not caught';
      let date = '';
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.props.index) {   
          text = ' caught';
          date = data[i].date;
           break;
        }
      }
      this.setState({pokemonStatus: text, dateOfCaught: date});
})

  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
         <Modal show={this.state.show} handleClose={this.hideModal} index={this.props.index}
                source = {this.props.source} name = {this.props.name}
                status = {this.state.pokemonStatus} date = {this.state.dateOfCaught}/>
        <p type="button" onClick={this.showModal} className="addInfo">
          more info
        </p>
      </main>
    );
  }
}

export default AddInfo;
