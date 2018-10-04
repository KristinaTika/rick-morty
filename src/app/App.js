import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import CharactersList from './containers/CharactersList';
import { Switch, Route, Redirect } from 'react-router-dom';
import EpisodesList from './containers/EpisodesList';
import LocationList from './containers/LocationList';
import SingleCharacter from './containers/SingleCharacter';
import Footer from './partials/Footer';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={SearchBar} />
          <Route path="/characters/:id" component={SingleCharacter} />
          <Route path="/characters" component={CharactersList} />
          <Route path="/episodes" component={EpisodesList} />
          <Route path="/locations" component={LocationList} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
