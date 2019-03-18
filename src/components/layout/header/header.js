import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import './header.scss';
import ASLIcon from './ASLIcon';
import CartSVG from './CartSVG';
import Logo from '../../Logo';

const Header = () => (
  <header>
    <Logo/>
    <nav>
      <NavLink icon="fas fa-home" link="/" title="Home"/>
      <a className="nav-link" href="/">
        <ASLIcon className="svg-icon"/>
        <span className="link-title">Why Sign?</span>
      </a>
      <NavLink icon="fas fa-chalkboard-teacher" link="/" title="Classes"/>
      <NavLink icon="far fa-calendar-check" link="/" title="Registration"/>
      <NavLink icon="far fa-bookmark" link="/" title="Resources"/>
      <a className="nav-link" href="/">
        <CartSVG className="svg-icon cart-icon"/>
        <span className="link-title">Why Sign?</span>
      </a>
      <NavLink icon="far fa-id-card" link="/" title="About"/>
    </nav>
  </header>
);

export default Header


const NavLink = ({icon, title, link}) => (
    <a className="nav-link" href={link}>
      <i className={icon}></i>
      <span className="link-title">{title}</span>
    </a>
);
