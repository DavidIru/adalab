import React, {Component} from 'react';
import './Card.sass';

class Card extends Component {
    render() {
        let types = [];
        this.props.data.types.forEach((type, index) => {
            types.push(<span key={index}>{type}</span>)
        });

        return (
            <div className="card">
                <div>
                    <img src={this.props.data.image} alt={this.props.data.name} />
                    <p>ID / {this.props.data.id}</p>
                </div>
                <div>
                    <p>{this.props.data.name}</p>
                    <div className="types">
                        {types}
                    </div>
                    {
                        this.props.data.evolves_from
                        ? <div className="evolves-from">
                            <p>Evoluciona de:</p>
                            <p>{this.props.data.evolves_from}</p>
                            </div>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Card;
