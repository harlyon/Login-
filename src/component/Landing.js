import React, { Component } from 'react';
import Cards from './Cards';
import Navbar from './Navbar';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar className="container" />
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Prizeless Digital</h1>
        <p className="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
     <Cards />
    </div>
    );
  }
}

export default Landing;