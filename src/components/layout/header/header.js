import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import './header.scss';
import ASLIcon from './ASLIcon';
import CartSVG from './CartSVG';
import Logo from '../../Logo';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand>
        <Logo/>
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav>
          <NavLink icon="fas fa-home" link="/" title="Home"/>
          <Link className="nav-link svg-link" to="/why">
            <ASLIcon className="svg-icon"/>
            <span className="link-title">Why Sign?</span>
          </Link>
          <NavLink icon="fas fa-chalkboard-teacher" link="/classes" title="Classes"/>
          {/*<NavLink icon="far fa-calendar-check" link="/" title="Registration"/>*/}
          <NavLink icon="far fa-bookmark" link="/resources" title="Resources"/>
          <a className="nav-link svg-link" href="https://go.platformpurple.com/?e=expressivehands" target="_blank">
            <CartSVG className="svg-icon cart-icon"/>
            <span className="link-title">Store</span>
          </a>
          <NavLink icon="far fa-id-card" link="/about" title="About"/>
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
);

export default Header


const NavLink = ({icon, title, link}) => (
    <Link className="nav-link" to={link}>
      <i className={icon}></i>
      <span className="link-title">{title}</span>
    </Link>
);
