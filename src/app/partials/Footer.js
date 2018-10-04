import React from 'react';
import './Partials.css';

const Footer = (props) => {

    return (
        <footer>
            {new Date().getFullYear()} Copyright  &#169; by Kristina Butkovic
        </footer>
    );
};

export default Footer;