import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="/landing">
          <img src="https://d29tj0bk46bbbf.cloudfront.net/image/logo.jpg" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
          </ul>
          <a href="/" className="navbar-text">
            Log Out
          </a>
        </div>
        </div>
      </nav>
  );
};

export default Navbar;