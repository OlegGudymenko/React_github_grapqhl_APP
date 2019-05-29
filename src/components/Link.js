import React from 'react'
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';

const Link = ({ to, children }) => {
  return (
    <NavLink to={to} activeClassName="active" tag={RRNavLink}>
      {children}
    </NavLink> 
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

export default Link;