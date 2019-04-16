import React, {Component} from 'react';
import axios from 'axios';

import './Pokedex.sass';
import Card from '../card/Card';
import SearchBar from '../search-bar/SearchBar';

class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: []
        };

        this.getData()
            .then((data) => {
                let pokemons = [];

                data.forEach((pokemon) => {
                    let types = pokemon.types.map((type) => type.type.name);
                    pokemons.push({
                        name: pokemon.name,
                        id: pokemon.id,
                        image: pokemon.sprites.front_default,
                        types: types,
                        evolves_from: null
                    });
                });

                this.setState({
                    pokemons: pokemons
                });
            })
            .catch(() => console.log('error'));
    }

    getData() {
        return new Promise((resolve, reject) => {
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=964')
                .then(res => {
                    const pokemons = res.data.results;
                    const promises = pokemons.map(pokemon => axios.get(pokemon.url));

                    Promise.all(promises)
                        .then(responses => {
                            const dataArray = responses.map(response => response.data);
                            resolve(dataArray);
                        })
                        .catch(() => {
                            reject();
                        });
                });
        })
    }

    render() {
        let pokemons = [];
        for (const [index, pokemon] of this.state.pokemons.entries()) {
            pokemons.push(<Card key={index} data={pokemon} />)
        }

        return (
            <div className="pokedex">
                <div className="triangleLeft"></div>
                <div className="triangleRight"></div>
                <div className="circleLeft"></div>
                <div className="circleRight"></div>
                <SearchBar/>
                <div className="cards">
                    {pokemons}
                </div>
            </div>
        );
    }
}

export default Pokedex;
