import React from 'react';
import Layout from "../components/layout/layout"
import pattern from '../../content/images/pattern.png';
import '../components/why.scss';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap";

const Why = ({data}) => {
  const img = data.imgOne.img.fluid;
  return (
      <Layout>
        <div className="why-wrapper">
          <div className="section-header" style={{backgroundImage: `url(${pattern})`}}>
            Why Sign?
          </div>
          <Container>
            <Row>
              <Col md={6}>
                <div className="heading-text">
                  Signing helps children <br/>
                  of all ages and abilities <br/>
                  <b>
                    communicate and connect <br/>
                    with the people they love.
                  </b>
                </div>
                <div className="divider"></div>
                <div className="header-content">
                  Signing allows infants to communicate before they can talk. <br/>
                  Research* shows that infants and toddlers who sign:
                  <ul>
                    <li>are less frustrated </li>
                    <li>learn to talk sooner </li>
                    <li>have larger vocabularies than non-signers  </li>
                    <li>scored higher on IQ tests at age 8  </li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <Img fluid={img}/>
              </Col>
            </Row>
            <Row>
              <Col className="text-content">
                <h3>Signing is a powerful learning tool.</h3>
                <div>
                  Once a child begins to talk, signing continues to offer important educational benefits. When signs and
                  words are used together, auditory learners hear the word, visual learners see the sign and kinesthetic
                  learners can use their hands to make the sign. In other words, signing creates the perfect storm that
                  can trigger a surge in language learning and cognitive development. Research* shows that preschool and
                  elementary children who use signs and finger spelling:
                </div>
                <ul>
                  <li>expand their vocabularies more quickly </li>
                  <li>develop more positive attitudes toward reading</li>
                  <li>learn letters, numbers, and sight words more easily</li>
                </ul>
                <h3>Signing helps with special needs.</h3>
                <div>
                  Children who have autism, Down syndrome, speech challenges, or language delays often use signs as a
                  primary means of communication or to simply clarify their speech. Signing opens the door to meaningful
                  social interactions with parents, teachers, and peers.
                </div>
                <h3>Signing is a bridge to the Deaf Community</h3>
                <div>
                  ASL is a beautiful and expressive language used widely throughout the United States and other parts of
                  the world. Knowing a few signs can give a child the confidence to engage and interact with a deaf
                  child rather than both children feeling awkward and helpless. Signing Time materials can provide a
                  foundation for learning ASL as a second language.
                </div>
                <div className="footnotes">
                  <i>*For a summary of research findings, visit <a href="http://www.signingtime.com/resources/sign-language-research" target="_blank">www.signingtime.com/resources/sign-language-research</a></i>
                  <br/>
                  <i> © 2011 Two Little Hands Productions - www.SigningTime.com</i>
                  <br/>
                  <i>OR</i>
                  <br/>
                  <a href="https://www.signingtime.com/teaching-baby-sign-language-infographic/">
                    <img title="baby-sign-language-infographic"
                         src="http://464aa5408536cd241b38-a45b01753b8639a65bf860074c5c0c83.r7.cf1.rackcdn.com/baby-sign-language-infographic.jpg" alt="baby sign language infographic" width="100%"/>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
  )
};

export const query = graphql`
  query {
    imgOne: file(relativePath: { eq: "why/1.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Why;