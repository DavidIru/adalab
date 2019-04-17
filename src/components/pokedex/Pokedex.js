import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './Pokedex.sass';
import Card from '../card/Card';
import BigCard from '../big-card/BigCard';
import SearchBar from '../search-bar/SearchBar';


class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.limit = 11;

        this.state = {
            pokemons: [],
            filtered: [],
            filter: ''
        };
    }

    componentWillMount() {
        this.getMainData()
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

                this.getAdvancedData()
                    .then((data) => {
                        data.forEach((pokemon, index) => {
                            if (pokemon.evolves_from_species) {
                                pokemons[index].evolves_from =  pokemon.evolves_from_species.name;
                            }
                        });

                        this.setState({
                            pokemons: pokemons,
                            filtered: pokemons
                        });
                    });
            })
            .catch(() => console.log('error'));
    }

    getMainData() {
        return new Promise((resolve, reject) => {
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=' + this.limit)
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

    getAdvancedData() {
        return new Promise((resolve, reject) => {
            let promises = [];
            for (let i = 1; i <= this.limit; i++) {
                promises.push(axios.get('https://pokeapi.co/api/v2/pokemon-species/' + i))
            }

            Promise.all(promises)
                .then(responses => {
                    const dataArray = responses.map(response => response.data);
                    resolve(dataArray);
                })
                .catch(() => {
                    reject();
                });
        })
    }

    handleKeyUp(event) {
        this.setState({
            filter: event.target.value,
            filtered: this.state.pokemons.filter(pokemon => pokemon.name.search(event.target.value) !== -1)
        });
    }

    render() {
        let pokemons = [];
        for (const [index, pokemon] of this.state.filtered.entries()) {
            pokemons.push(<Card key={index} data={pokemon}/>)
        }

        return (
            <div className="pokedex">
                <div className="triangleLeft"></div>
                <div className="triangleRight"></div>
                <div className="circleLeft"></div>
                <div className="circleRight"></div>
                <SearchBar onKeyUp={(event) => this.handleKeyUp(event)}/>
                <div className="cards">
                    { this.state.filter
                        ? <p className="loading">No hay coincidencias para la búsqueda: <strong>{this.state.filter}</strong></p>
                        : <p className="loading">Cargando datos...</p>
                    }
                    <Router>
                        {pokemons}
                        <Route
                            path="/:name"
                            render={(props) => <BigCard pokemons={this.state.pokemons} name={props.match.params.name} />}
                        />
                    </Router>
                </div>
            </div>
        );
    }
}

export default Pokedex;
