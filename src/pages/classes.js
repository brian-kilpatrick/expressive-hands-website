import React from 'react';
import Layout from "../components/layout/layout"
import pattern from '../../content/images/pattern.png';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap";
import '../components/classes.scss';

const Classes = ({data}) => {
  // const img = data.imgOne.img.fluid;
  return (
      <Layout title="Classes">
        <div className="classes-wrapper">
          <div className="section-header" style={{backgroundImage: `url(${pattern})`}}>
            Classes
          </div>
          <Container>
            <Row>
              <Col>
                <h1>Current Offerings:</h1>
                <h4>Sign+Play (Mixed Ages) | 0-5 years</h4>
                <i>Cycle I: My First Signs</i>
                <p>
                  Learn the most useful starter signs including those for food, drink, pets,
                  family, clothing, transportation, manners and bedtime. (Baby
                  Signing Time! Vol 1 & Vol 2) - <a className="register-link" href="https://www.kithkin-community.com/classes-calendar/2019/5/29/sign-and-play-with-expressive-hands" target="_blank">Register Here!</a>
                </p>
                <i>Cycle II: Everyday Signs</i>
                <p>
                  Weekly themes include day and night, outside, bugs, friends, feelings,
                  opposites, foods and toys. (Baby Signing Time! Vol 3 & Vol 4)
                </p>
                <h4>Signing Storytime (Mixed Ages) | 0-5 years</h4>
                <p>
                  Signing storytimes are a great way for you and your child to learn american sign language (asl) vocabulary as you play, sing and sign along with your friends and family! come join us! - $10 @ <a href="https://www.kithkin-community.com/classes-calendar/2019/5/3/signing-storytime-with-expressive-hands-ny2n5">Kith & Kin</a>
                </p>
                <h1>Future Offerings:</h1>
                <p><i>Baby Sign+Play | 0-3</i></p>
                <p><i>Preschool Sign+Play | 3-5 years</i></p>
                <i>Potty Time | 18 mo - 3 years</i>
                <p>
                  This 8-week series class introduces signs relevant to potty training. Whether you've begun potty
                  training or not, this class will empower parents and children to communicate clearly with one another
                  and encourage a playful and positive approach to potty training.
                </p>
                <p><i>Potty Time Workshop | Parent-Only Workshop</i></p>
                <p><i>Intro to Baby Sign Language for New/Expectant Parents | Parent-Only Workshop - (babies up to age 3-mo can attend)</i></p>

                <h4>Class Descriptions:</h4>
                <p><b>My First Signs: </b><i>Recommended for ages 0-2.</i></p>
                <p>
                  Learn the most useful starter signs including those for food, drink, pets, family, clothing,
                  transportation, manners and bedtime. Each week also features a signing tip in which we will discuss
                  the benefits of using ASL with babies and toddlers. Vocabulary based on BST Vol 1 & Vol 2.
                </p>
                <span>Classes will run 8-weeks</span><br/>
                <span>Tuition: $130</span><br/>
                <span>Includes: Parent Resource eGuide, Keepsake Graduate Certificate &
                  choice of ONE Baby Signing Time product bundle of choice: Vol 1 or Vol 2 Video/MP3 combo,
                  flashcards/Hopkins Plush toy, or board board/Hopkins Plush toy.
                </span><br/>
                <span>
                  Sibling Discount is 50% off (includes Hopkins Plush toy).
                </span><br/>
                <span>
                  Drop-in Classes are $20 per class (no extra product included).
                </span><br/>
              </Col>
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

export default Classes;