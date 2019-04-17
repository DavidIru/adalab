import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './BigCard.sass';
import noImage from './noimage.png';

class Card extends Component {
    render() {
        return (
            <Link to={'/'}>
                <div className="big-card-background">
                    <div className="big-card">
                        {this.props.loaded
                            ? this.props.pokemon
                                ? this.props.pokemon.name
                                : <p>El pokemon <strong>{this.props.name}</strong> no se encuentra</p>
                            : <p>Cargando datos...</p>
                        }
                    </div>
                </div>
            </Link>
        );
    }
}

export default Card;
