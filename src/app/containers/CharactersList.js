import React, { Component } from 'react';
import { charactersService } from '../../services/characters';
import CharacterItem from '../components/CharacterItem';
import './CharactersList.css';
import Loader from '../partials/Loader';

class CharactersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
        }

        this.renderCharacters = this.renderCharacters.bind(this);
    }

    componentDidMount() {
        charactersService.fetchCharacters()
            .then(res => this.setState({characters: res}))
            .catch(err => this.setState({error: `OOUPS! Something went wrong! ${err.message}`})); 
    }

    renderCharacters(characters) {
        return characters.map(character => <CharacterItem character={character} key={character.id} />);
    }

    render() {
        const { characters, error } = this.state;
        return (
            <div id="wrapper">
            <p id="error"> {error} </p>
                <ul className="list-characters">
                    {characters.length === 0 ? <Loader /> : this.renderCharacters(characters)}
                </ul>
            </div>
        );
    }
}

export default CharactersList;