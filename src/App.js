import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import './App.css';
import whiskey from './react-router-patterns/whiskey.jpg';
import hazel from './react-router-patterns/hazel.jpg';
import tubby from './react-router-patterns/tubby.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav dogs={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogData={this.props.dogs} />}
          />
          <Route
            exact
            path="/dogs/:name"
            render={routeProps => (
              <DogDetails {...routeProps} dogData={this.props.dogs} />
            )}
          />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!'
      ]
    },
    {
      name: 'Hazel',
      age: 0,
      src: hazel,
      facts: [
        'Hazel has soooo much energy!',
        'Hazel is highly intelligent.',
        'Hazel loves people more than dogs.'
      ]
    },
    {
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina hates Tubby.'
      ]
    }
  ]
};

export default App;
