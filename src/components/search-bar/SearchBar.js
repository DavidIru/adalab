import React, {Component} from 'react';
import './SearchBar.sass';

class SearchBar extends Component {
    render() {
        return (
            <input type="text" placeholder="Filtra pokemons por nombre..." onKeyUp={this.props.onKeyUp}/>
        );
    }
}

export default SearchBar;
