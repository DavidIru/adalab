import React, {Component} from 'react';
import './Card.sass';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur"/>
                    <p>ID / 1</p>
                </div>
                <div>
                    <p>bulbasaur</p>
                    <div className="types">
                        <span>poison</span>
                        <span>grass</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
