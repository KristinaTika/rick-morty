import React from 'react';
import { Link } from 'react-router-dom';
import './Partials.css'

const Header = (props) => {

    return (
        <header>
            <h1>Rick and Morty App </h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/characters">All Characters</Link>
                <Link to="/locations">Locations</Link>
                <Link to="/episodes">Episodes</Link>
            </nav>
        </header>
    );
};

export default Header;