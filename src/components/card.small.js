import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import * as consts from '../constants/const';

class SmallCard extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickCatchButton = this.handleClickCatchButton.bind(this);
        this.state = {
            active: false
        };
    }

    componentDidMount () {
        const { pokemon } = this.props;
        
        if (pokemon.catched === 1) {
            this.setState({ active: false });
          } else {
            this.setState({ active: true });
          }
    }

    handleClickCatchButton() {
        const url = `${consts.POKEMON_ROUTES}/${this.props.pokemon.id}`;
        const data = {
            name: this.props.pokemon.name,
            catched: 1,
            date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
        }
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json'}
            })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
        this.setState(state => ({
            active: !state.active
          }));  
    }

    render () {
        let pokemonStatus = false;
        pokemonStatus = this.state.active;
        const { pokemon } = this.props;
    
        return (
            <Card title={`${pokemon.name}`}  style={{ width: '100%', textTransform: 'capitalize' }}>
                <Link to={`${consts.PATH_POKEMON}/${pokemon.id}`}><img src={`../pokemons/${pokemon.id}.png`} width='100%'  /></Link>
                <Button type="primary" block={true} onClick={this.handleClickCatchButton} disabled={pokemonStatus ? false : true}>
                    {pokemonStatus ? 'Catch!' : 'Catched!'}
                </Button>
            </Card>
        );
    }
}

export default SmallCard;