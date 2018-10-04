import { episodeEndpoint } from "../constants/constants";
import { Episode } from "../entities/Episode";
import axios from 'axios';

class Episodes {

    fetchEpisodes() {
        return axios.get(episodeEndpoint)
            .then((res) => {
                const episodes = res.data;
                return episodes.map((episode) => {
                    const id = episode.id;
                    const airDate = episode.air_date;
                    const characters = episode.characters;
                    const ep = episode.episode;
                    const name = episode.name;

                    const myEpisode = new Episode(id, airDate, characters, ep, name);
                    return myEpisode;
                });
            });
    }
}

export const episodesService = new Episodes();