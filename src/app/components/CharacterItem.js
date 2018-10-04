import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterItem.css';
import PropTypes from 'prop-types';

const CharacterItem = (props) => {

    const { character } = props;

    return (
        <li>
            <Link to={"/characters/" + character.id}>
                <div>
                    <img src={character.image} alt={character.name} />
                    <p id="char-name">{character.name}</p>
                </div>
            </Link>
        </li>
    );
};
CharacterItem.propTypes = {
    character: PropTypes.object.isRequired
}

export default CharacterItem;