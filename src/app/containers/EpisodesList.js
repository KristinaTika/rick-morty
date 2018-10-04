import React, { Component } from 'react';
import { episodesService } from '../../services/episodes';
import EpisodeItem from '../components/EpisodeItem';
import './EpisodesList.css';
import Loader from '../partials/Loader';

class EpisodesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
        }

        this.renderEpisodes = this.renderEpisodes.bind(this);
    }

    componentDidMount() {
        return episodesService.fetchEpisodes()
            .then(res => this.setState({episodes: res}))
            .catch(err => this.setState({error: `OOUPS! Something went wrong! ${err.message}`})); 
    }

    renderEpisodes(episodes) {
        return episodes.map(ep => <EpisodeItem ep={ep} key={ep.id} />);
    }

    render() {
        const {episodes, error } = this.state;
        return (
            <div id="wrapper">
                <p id="error"> {error} </p>
                <ul id="list-episodes">
                    {episodes.length === 0 ? <Loader /> : this.renderEpisodes(episodes)}
                </ul>
            </div>
        );
    }
}

export default EpisodesList;