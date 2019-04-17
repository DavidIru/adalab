import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './BigCard.sass';
import noImage from './noimage.png';

class Card extends Component {
    render() {
        const pokemon = (this.props.pokemons.filter(pokemon => pokemon.name.search(this.props.name) !== -1)).pop();
        return (
            <Link to={'/'}>
                <div className="big-card-background">
                    <div className="big-card">
                        {pokemon
                            ? pokemon.name
                            : <p>ERROR</p>
                        }
                    </div>
                </div>
            </Link>
        );
    }
}

export default Card;
