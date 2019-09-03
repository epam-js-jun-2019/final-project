import React from 'react';
import './App.css';
import Modal from './Modal';

class AddInfo extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
         <Modal show={this.state.show} handleClose={this.hideModal} />
        <p type="button" onClick={this.showModal} className="addInfo">
          more info
        </p>
      </main>
    );
  }
}

export default AddInfo;
