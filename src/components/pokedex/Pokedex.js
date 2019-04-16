import React, {Component} from 'react';
import './Pokedex.sass';
import Card from '../card/Card';

class Pokedex extends Component {
    render() {
        return (
            <div className="pokedex">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}

export default Pokedex;
