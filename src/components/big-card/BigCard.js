import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './BigCard.sass';
import noImage from './noimage.png';

class Card extends Component {
    render() {
        if (!this.props.loaded) {
            return (
                <p className="loading">Cargando datos...</p>
            );
        } else if (!this.props.pokemon) {
            return (
                <p className="loading visible">El pokemon <strong>{this.props.name}</strong> no se encuentra</p>
            );
        }

        let types = [];

        this.props.pokemon.types.forEach((type, index) => {
            types.push(<span key={index}>{type}</span>)
        });

        return (
            <Link to={'/'}>
                <div className="big-card-background">
                    <div className="big card">
                        <div>
                            <img src={this.props.pokemon.image || noImage} alt={this.props.pokemon.name}/>
                            <p>ID / {this.props.pokemon.id}</p>
                        </div>
                        <div>
                            <p>{this.props.pokemon.name}</p>
                            <div className="types">
                                {types}
                            </div>
                            {
                                this.props.pokemon.evolves_from
                                    ? <div className="evolves-from">
                                        <p>Evoluciona de:</p>
                                        <p>{this.props.pokemon.evolves_from}</p>
                                    </div>
                                    : null
                            }
                        </div>

                    </div>
                </div>
            </Link>
        );
    }
}

export default Card;
