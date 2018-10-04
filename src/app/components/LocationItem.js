import React, { Component } from 'react';
import { locationService } from '../../services/locations';
import './LocationItem.css';
import PropTypes from 'prop-types';

class LocationItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            residents: [],
        }

        this.renderResidents = this.renderResidents.bind(this);
    }

    componentDidMount() {
        const { residents } = this.props.loc;
        return locationService.fetchResidents(residents)
            .then(res => this.setState({residents: res}))
    }

    renderResidents() {
        const { residents } = this.state;
        if(residents.length === 0) {
            return <li>There are no residents.</li>
        }
        return residents.slice(0, 10).map((res, i) => <li key={i}>{res}</li>);
    }

    render() {
        const { dimension, name, type } = this.props.loc;
        return (
            <li>
                <div><h3>Name:</h3> {name}</div>
                <div><h3>Dimension: </h3>{dimension}</div>
                <div><h3>Type:</h3> {type}</div>
                <div><h3>Residents:</h3></div>
                <ul className="location-info">
                    {this.renderResidents()}
                </ul>
            </li>
        );
    }
}
LocationItem.propTypes = {
    loc: PropTypes.object.isRequired,
}

export default LocationItem;