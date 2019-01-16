import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="DogList">
        <h1>HELLOZ. WE HAZ DOGS. CLICK FOR MORE INFOMASHUNZ ON GOOD DOGS.</h1>
        <div
          className="item"
          style={{
            verticalAlign: 'top',
            display: 'inline-block',
            textAlign: 'center',
            width: '120px'
          }}
        >
          {this.props.dogData.map(dog => (
            <div>
              <img
                src={dog.src}
                style={{ borderRadius: '50%', width: '150px' }}
                alt="#"
              />
              <span className="caption" style={{ display: 'block' }}>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
