import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: '#344152'}}>
      <Navbar.Brand style={{ color: '#FFFFFA', marginLeft: '1rem'}}>
        Status Dashboard
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;