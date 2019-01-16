import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('PROPS', this.props);
    let ourDog = this.props.dogData.filter(
      dog => dog.name === this.props.match.params.name
    );
    console.log(ourDog);
    return (
      <div className="Dog">
        <img
          src={ourDog[0].src}
          alt="#"
          style={{ borderRadius: '15px', width: '555px', margin: '5px' }}
        />
        <h4>{ourDog[0].name}</h4>
        <h5>{ourDog[0].age} years old</h5>
        <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
          {ourDog[0].facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Dog;
