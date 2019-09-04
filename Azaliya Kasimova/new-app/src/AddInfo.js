import React from 'react';
import './App.css';
import Modal from './Modal';

class AddInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = { show: false,
                   pokemonName: this.props.name,
                   imageSrc: this.props.source,
                   pokemonID: this.props.index};
    }
  
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
         <Modal show={this.state.show} handleClose={this.hideModal} index={this.state.pokemonID}
                source = {this.state.imageSrc} name = {this.state.pokemonName}
                />
        <p type="button" onClick={this.showModal} className="addInfo">
          more info
        </p>
      </main>
    );
  }
}

export default AddInfo;
