import React from "react"
// import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import { Parallax } from 'react-parallax';
import '../components/layout/index.scss';
import SliderView from '../components/SliderView';
import background from '../../content/images/pattern.png';
import divider from '../../content/images/home/header_divider.png'
import Instafeed from 'react-instafeed';
import { Container } from 'react-bootstrap';

const IndexPage = ({data}) => (
    <Layout title="Home">
      <SliderView images={data}/>
      <Parallax bgImage={background} strength={300}>
        <div className="para-content">
          <span className="title">Come Sign With Us!</span>
        </div>
      </Parallax>
      <div className="main-content">
        <h1>Welcome to Expressive Hands</h1>
        <div className="divider" style={{backgroundImage: `url(${divider})`}}></div>
        <p>Sign and Play Classes, Story Times, and Workshops for ages 0-5 and their families</p>
        <p>Based on the award-winning Baby Signing Time Program</p>
        <p>Coming soon to Philadelphia, PA!</p>
      </div>
      <Container className="instagram-feed">
        <h4>Check out our latests posts on Instagram!</h4>
        <div id="instafeed">
          <Instafeed
              userId="11367482566"
              limit="6"
              resolution="thumbnail"
              sortBy="most-recent"
              target="instafeed"
              template={`<div class="item col-6 col-sm-4 col-md-2"><figure className="overlay overlay3"><a href="{{link}}" target="_blank"><span className="bg"></span><img src="{{image}}" /><figcaption className="d-flex"><div className="align-self-center mx-auto"><i className="fa fa-instagram"></i></div></figcaption></figure></div>`}
              accessToken="11367482566.663e968.6c96ed8c472f4c0bac66a35aaf2aa5cf"
          />
        </div>
      </Container>
    </Layout>
);

export const query = graphql`
  query {
    slider: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/home/slider/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
