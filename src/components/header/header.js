import React from 'react';
import { Trans } from '@lingui/react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Logo from '../../../assets/logo.svg';

import './header.scss';

const Header = () => (
  <Navbar className="header" color="light" light expand="md">
    <div className="container">
      <NavbarBrand href="/">
        <Logo className="logo" />
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Contacts</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </div>
  </Navbar>
);

export default Header;
