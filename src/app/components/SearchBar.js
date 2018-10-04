import React, { Component } from 'react';
import './SearchBar.css';
import { charactersService } from '../../services/characters';
import CharacterItem from './CharacterItem';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            searchedCharacter: [],
        }

        this.renderCharacters = this.renderCharacters.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearch(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { searchValue } = this.state;
        charactersService.fetchSearchedCharacters(searchValue)
            .then(res => this.setState({searchedCharacters: res}));    
    }

    renderCharacters(characters) {
        if (!characters) {
            return;
        }
        return characters.map(character => <CharacterItem character={character} key={character.id} />);
    }

    render() {
        const { searchedCharacters } = this.state;
        return (
            <div>
                <h1>Welcome to The Rick and Morty App</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="search" placeholder="Search characters by name" name="searchValue" onChange={this.handleSearch} />
                </form>
                <ul className="list-characters search-list">
                    {searchedCharacters ? this.renderCharacters(searchedCharacters) : ""}
                </ul>
            </div>
        );
    }
}

export default SearchBar;