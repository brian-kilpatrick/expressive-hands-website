import React from "react"
// import { Link } from "gatsby"
//
// import Layout from "../components/layout/layout"
// import Image from "../components/image"
import Helmet from 'react-helmet';
import SEO from "../components/layout/seo"
import '../components/layout/index.scss';
import Logo from '../components/Logo';

const { Fragment } = React;

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
    </Helmet>
    <SEO title="Home" />
    <div id="coming-soon">
      <Logo/>
      <h1>Website Coming Soon</h1>
      <p>In the meantime, visit us on social media:</p>
      <div className="contact-container">
        <a href="https://www.instagram.com/myexpressivehands/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>

  </Fragment>
);

export default IndexPage
