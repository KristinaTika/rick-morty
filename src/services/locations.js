import { locationEndpoint } from "../constants/constants";
import axios from 'axios';
import { Location } from "../entities/Location";

class Locations {

    fetchLocations() {
        return axios.get(locationEndpoint)
            .then(res => mapResults(res));
    }

    fetchResidents = (residents) => {
        const residentsPromise = residents.map(url => axios.get(url));
        return Promise.all(residentsPromise)
            .then(responses => responses.map(raw => raw.data.name))
    }
}

const mapResults = (res) => {
    const results = res.data.results;
    return results.map((res) => {
        const id = res.id;
        const dimension = res.dimension;
        const name = res.name;
        const residents = res.residents;
        const type = res.type;
        const myLocation = new Location(id, dimension, name, residents, type);
        return myLocation;
    });
}

export const locationService = new Locations();