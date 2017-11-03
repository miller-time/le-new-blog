import React from 'react';
import { Navbar } from 'react-bootstrap';

function SiteNav() {
  return (
    <Navbar staticTop inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <span className="navbar-brand">Le New Blog</span>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

export default SiteNav;
