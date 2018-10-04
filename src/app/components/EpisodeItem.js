import React, { Component } from 'react';
import { locationService } from '../../services/locations';
import './EpisodeItem.css';
import PropTypes from 'prop-types';

class EpisodeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            showCharacters: false,
        };

        this.renderCharacters = this.renderCharacters.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        const { characters } = this.props.ep;
        return locationService.fetchResidents(characters)
            .then(res => this.setState({ characters: res }));
    }

    handleMouseOver(e) {
        this.setState({ showCharacters: true });
    }

    handleMouseLeave() {
        this.setState({ showCharacters: false });
    }

    renderCharacters() {
        const { characters, showCharacters } = this.state;
        return showCharacters
            ? characters.map((res, i) => {
                return <li key={i} className="character-li">{res}</li>
            })
            : "";
    }

    render() {
        const { name, episode, airDate } = this.props.ep;
        return (
            <li>
                <div><h3>Episode:</h3>{episode}</div>
                <div><h3>Name:</h3>{name}</div>
                <div><h3>Air Date:</h3>{airDate}</div>
                <ul onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                    <h3 className="episode-character">Characters:</h3>
                    {this.renderCharacters()}
                </ul>
            </li>
        )
    }
}
EpisodeItem.propTypes = {
    ep: PropTypes.object.isRequired,
}

export default EpisodeItem;