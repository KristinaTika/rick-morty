import React, { Component } from 'react';
import { locationService } from '../../services/locations';
import LocationItem from '../components/LocationItem';
import './LocationList.css';
import Loader from '../partials/Loader';

class LocationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
            residents: [],
        }

        this.renderLocations = this.renderLocations.bind(this);
    }

    componentDidMount() {
        return locationService.fetchLocations()
            .then(res => this.setState({locations: res}))
            .catch(err => this.setState({error: `OOUPS! Something went wrong! ${err.message}`})); 
    }

    renderLocations(locations) {
        return locations.map(loc => <LocationItem loc={loc} key={loc.id} />);
    }

    render() {
        const { locations, error } = this.state;
        return (
            <div>
                <h1>Locations: </h1>
                <ul id="location-list">
                    {locations.length === 0 ? <Loader /> : this.renderLocations(locations)}
                </ul>
            </div>
        );
    }
}

export default LocationList;