import React, { Component } from 'react';
import { Catch_button } from '../components/Catch_button/Catch_button';

export class CatchButtonContainer extends Component{

    state ={
        caught: null
    }

    componentDidMount(){
        this.isCaught();
    }

    isCaught = () =>{
        const { id } = this.props;
        fetch(`http://localhost:3000/caught_pokemons?id=${id}`, {
        headers: {
        'Content-Type': 'application/json',
        }})
        .then(response => {
            if (response.ok) {
                return Promise.resolve(response);
            }
            else {
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length!=0){
                this.setState({caught:true});
            }
            else {
                this.setState({caught:false});
            }
        })
        .catch(error => {
            console.log('Request failed', error);
        });
    }

    handleCatchButton =()=>{
        const { id, name }=this.props;
        const today = new Date();
        fetch('http://localhost:3000/caught_pokemons', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, name, capture_date: today})
        })
        .then(response => {
            if (response.ok) {
                return Promise.resolve(response);
            }
            else {
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({caught:true});
        })
        .catch(error => {
            console.log('Request failed', error);
        });
    }

    render(){
        const {caught} = this.state;
        if (caught===null) {
            return (<></>)
        }
        else{
            return(
                <>
                    {caught && <Catch_button onClick={this.handleCatchButton} disable={caught} text='Пойман' />}
                    {!caught && <Catch_button onClick={this.handleCatchButton} disable={caught} text='Поймать' />}
                </>
            )
        }
    }

}
