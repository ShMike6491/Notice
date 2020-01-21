import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <Link to='/' className='navbar-brand'>
        Notice
      </Link>
      <br />
      <Link to='/create' className='nav-link'>
        Create new
      </Link>
    </nav>
  );
};

export default Navbar;
