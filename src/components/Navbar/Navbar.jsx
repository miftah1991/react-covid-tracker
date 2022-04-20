import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navabar.css';
import search from '../../images/searchicon.svg';
import home from '../../images/home.svg';

function Navbar({ pageTo }) {
  switch (pageTo) {
    case 'No':
      return <div>Nop</div>;
    default:
      return (
        <div className="navbar">
          <Link to="/"><img className="navbar__img" src={home} alt="Home" /></Link>
          <h1 className="navbar__title">covid-19 stats</h1>
          <img className="navbar__img" src={search} alt="search" />
        </div>
      );
  }
}

export default Navbar;

Navbar.defaultProps = {
  pageTo: '',
};

Navbar.propTypes = {
  pageTo: PropTypes.string,
};
