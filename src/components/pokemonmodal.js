import React from 'react';
import { Modal, Button } from 'antd';

class PokemonModal extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state=({visible: false,
        loading: false
        });
    }

    showModal () {
        this.setState({visible: true});
    } 
    handleCancel () {
        this.setState({visible: false});
    }
     
    shouldComponentUpdate (){
        return (this.state.visible == true);
    }
    render() {
        let visible = false;
        let name = NULL;
        if (this.state) {
            visible = this.state.visible;
        }
        const { pokemon } = this.props;
        if (pokemon) {
        name = pokemon.name;
        } 
        return (
          <>
             <Button type="primary" onClick={this.showModal}>
modal            </Button>
            <Modal
              visible={visible}
              title={name}
          //    onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  Return
                </Button>,
                
              ]}
            >
              <p></p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </>
        );}
    }


export default PokemonModal;