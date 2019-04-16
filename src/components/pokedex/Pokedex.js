import React, {Component} from 'react';
import './Pokedex.sass';
import Card from '../card/Card';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        const pokemons = [{
            name: 'bulbasaur',
            id: 1,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            types: [
                'poison',
                'grass',
            ],
            evolves_from: null,
        }, {
            name: 'ivysaur',
            id: 2,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            types: [
                'poison',
                'grass',
            ],
            evolves_from: 'bulbasaur',
        }, {
            name: 'venusaur',
            id: 3,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            types: [
                'poison',
                'grass',
            ],
            evolves_from: 'ivysaur',
        }, {
            name: 'charmander',
            id: 4,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
            types: [
                'fire',
            ],
            evolves_from: null,
        }, {
            name: 'charmeleon',
            id: 5,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
            types: [
                'fire',
            ],
            evolves_from: 'charmander',
        }, {
            name: 'charizard',
            id: 6,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            types: [
                'flying',
                'fire',
            ],
            evolves_from: 'charmeleon',
        }];

        this.state = {
            pokemons: pokemons
        };
    }
    /*

    */

    render() {
        let pokemons = [];
        for (const [index, pokemon] of this.state.pokemons.entries()) {
            pokemons.push(<Card key={index} data={pokemon} />)
        }

        return (
            <div className="pokedex">
                {pokemons}
            </div>
        );
    }
}

export default Pokedex;
