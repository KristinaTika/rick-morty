import { characterEndpoint, singleCharacterEndpoint, searchCharactersEndpoint } from "../constants/constants";
import axios from 'axios';
import { Character } from "../entities/Character";

class Characters {

    fetchCharacters() {
        return axios.get(characterEndpoint)
            .then(res => mapCharacters(res))
    };

    fetchSingleCharacter(id) {
        return axios.get(`${singleCharacterEndpoint}${id}`)
            .then(response => mapSingleCharacter(response)) 
    };

    fetchSearchedCharacters(id) {
        return axios.get(`${searchCharactersEndpoint}${id}`)
            .then(res => mapCharacters(res))
    }
}

const mapCharacters = (res) => {
    let results = res.data.results || res.data;
    return results.map((res) => {
        const myCharacter = {
            id: res.id,
            image: res.image,
            name: res.name
        }
        return myCharacter;
    });
}

const mapSingleCharacter = (response) => {
    let res = response.data;
    const id = res.id;
    const gender = res.gender;
    const image = res.image;
    const location = res.location.name;
    const name = res.name;
    const origin = res.origin.name;
    const species = res.species;
    const status = res.status;

    const myCharacter = new Character(id, gender, image, location, name, origin, species, status);
    return myCharacter;
}

export const charactersService = new Characters();