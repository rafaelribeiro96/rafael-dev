/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-scroll';

const SmoothScrollLink = ({ to, children, ...rest }) => (
  <Link
    activeClass="active"
    to={to}
    smooth={true}
    spy={true}
    offset={-70}
    duration={500}
    {...rest}
  >
    {children}
  </Link>
);

export default SmoothScrollLink;
