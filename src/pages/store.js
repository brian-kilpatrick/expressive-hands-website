import React from 'react';
import Layout from "../components/layout/layout"
import pattern from '../../content/images/pattern.png';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap";

const Store = ({data}) => {
  // const img = data.imgOne.img.fluid;
  return (
      <Layout>
        <div className="why-wrapper">
          <div className="section-header" style={{backgroundImage: `url(${pattern})`}}>
            Store
          </div>
          <Container>
            <Row>
              <h1>Visit our store <a href="" target="_blank">Here</a>!</h1>
            </Row>
          </Container>
        </div>
      </Layout>
  )
};

// export const query = graphql`
//   query {
//     imgOne: file(relativePath: { eq: "why/1.jpg"}) {
//       img: childImageSharp {
//         fluid(maxWidth: 500, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default Store;