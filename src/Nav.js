import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <nav
          style={{
            backgroundColor: '#5F50C6',
            display: 'flex',
            justifyContent: 'space-around',
            height: '5vh'
          }}
        >
          <NavLink
            exact
            to="/"
            style={{ color: 'white', padding: '5px' }}
            activeStyle={{ color: '#2F2F2F' }}
          >
            Home
          </NavLink>
          {this.props.dogs.map(dog => (
            <NavLink
              style={{ color: 'white', padding: '5px' }}
              activeStyle={{ color: '#2F2F2F' }}
              to={`/dogs/${dog.name}`}
            >
              {dog.name}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  }
}

export default Nav;
