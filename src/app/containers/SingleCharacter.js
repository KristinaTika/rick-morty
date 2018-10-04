import React, { Component, Fragment } from 'react';
import { charactersService } from '../../services/characters';
import './SingleCharacter.css';
import Loader from '../partials/Loader';

class CharacterItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: {},
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        charactersService.fetchSingleCharacter(id)
            .then(res => this.setState({character: res,}))
            .catch(err => this.setState({error: `OOUPS! Something went wrong! ${err.message}`})); 
    }

    render() {
        let renderCharacter = <Loader />
        const { character } = this.state;
        const { name, image, gender, origin, species, status, location } = this.state.character;
        if (!character) {
            return renderCharacter;
        }
        renderCharacter = <div id="single-character-info">
            <h2><b>Character name:</b> {name}</h2>
            <div>
                <img src={image} alt={name} />
            </div>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Origin:</b> {origin}</p>
            <p><b>Species</b>: {species}</p>
            <p><b>Status:</b> {status}</p>
            <p><b>Planet:</b> {location}</p>
        </div>

        return (
            <Fragment>
                {renderCharacter}
            </Fragment>
        );
    }
};

export default CharacterItem;