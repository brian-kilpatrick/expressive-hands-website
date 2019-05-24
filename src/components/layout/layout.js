/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"
import Logo from '../Logo'
import background from '../../../content/images/pattern.png';
import Header from "./header/header"
import "./layout.scss"
import Helmet from 'react-helmet';
import favicon from '../../../content/images/favicon.jpg';
import { Link } from 'gatsby'

const Layout = ({ children, title }) => (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
              integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
        />
        <script type="text/javascript" src="https://chimpstatic.com/mcjs-connected/js/users/ab41e6622ae5244b0c43b9c59/8b9769602c45d2553d62fae9d.js"/>
        <link rel="icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <SEO title={title}/>
      <Header/>
      <main>{children}</main>
      <footer style={{backgroundImage: `url(${background})`}}>
        <Logo/>
        <p>Expressive Hands, LLC</p>
        <a href="mailto:info@myexpressivehands.com">info@myexpressivehands.com</a>
        <a href="tel:267-225-8626">Phone: 267-225-8626</a>
        <Link to="/contact">Join our mailing list</Link>
        <a href="http://www.signingtime.com/academy/instructors/star/" target="_blank">Signing Time Academy Profile</a>
        <div className="social">
          <a className="social-link" href="https://www.facebook.com/MyExpressiveHands/" target="_blank"><i className="fab fa-facebook-square"></i></a>
          <a className="social-link" href="https://www.instagram.com/myexpressivehands/" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
