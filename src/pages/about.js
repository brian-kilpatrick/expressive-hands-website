import React from 'react';
import Layout from "../components/layout/layout"
import pattern from '../../content/images/pattern.png';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap";
import '../components/about.scss';

const About = ({data}) => {
  const img = data.star.img.fluid;
  return (
      <Layout title="About">
        <div className="about-wrapper">
          <div className="section-header" style={{backgroundImage: `url(${pattern})`}}>
            About
          </div>
          <Container>
            <Row>
              <Col>
                <Img fluid={img} className="header-img"/>
                <h1>Greetings!</h1>
                <p>
                  My name is Starlita (or Ms. Star to the kiddos), the founder of Expressive Hands. I am a <a
                    href="http://www.signingtime.com/academy/instructors/star" target="_blank">Baby Signing Time Instructor</a>
                  certified through the award-winning <a href="http://www.babysigningtime.com">Signing Time</a> program.
                  I am also a member of both the National Association for the Education of Young Children (NAEYC) and
                  the Pennsylvania Association for the Education of Young Children (PennAEYC - an affiliate of the NAEYC),
                  as well as certified in Adult and Pediatric First Aid/CPR/AED through the American Red Cross. I am, however,
                  most recognized as a wife and a mommy of 3 beautiful children.
                </p>
                <p>
                  In 2013, after I gave birth to my first child, I learned about the benefits of teaching babies sign
                  language from my birth center’s Lactation Consultant. She recommended the Baby Signing Time program
                  produced by Two Little Hands Productions because it teaches children American Sign Language (ASL)
                  vocabulary, versus made up signs, in a fun and simple way. At around 3 months of age, my husband and
                  I began teaching our son the ASL sign for “milk.” By 5 months of age, our son was able to sign “milk”
                  back! We all enjoyed singing, dancing, and learning along with the DVDs. Because we found Baby Signing
                  Time to be so effective with our son, we decided to also teach ASL signs to our other two children, our
                  two girls. As they grow older, Baby Signing Time (and the many other programs produced by Two Little
                  Hands Productions) has now become a language-enrichment tool, teaching our children ASL as a second
                  language. It is because of our experience and great love for the Baby Signing Time program that I
                  desire to share it with as many families as I can!
                </p>
                <h4>About Baby Signing Time!</h4>
                <p><b>Join the Baby Signing Time revolution! </b>Your baby can communicate with you using baby signs long before she is old enough to speak.</p>
                <ul>
                  <li>Reduce tantrums!</li>
                  <li>Stimulate early learning and build vocabulary</li>
                  <li>Create a window into your child's mind and heart</li>
                  <li>Instill confidence and security through understanding</li>
                </ul>
                <p>
                  <b>Babies crawl before they walk, and sign before they talk!</b> When a baby waves "bye-bye" or points
                  at what she wants, she is signing! It is natural for babies to communicate with signs. Baby Signing
                  Time gives babies the signs they need to express their needs and wants. Clever songs, playful animation
                  and adorable babies make learning signs fun and easy.
                </p>
                <p>
                  Baby Signing Time makes learning signs fun and easy with clever songs, playful animation, and real
                  signing babies age two and under! Baby Signing Time sets your baby's day to music with signs, songs,
                  animation, and real signing babies for everyday events like playtime, getting dressed, going places,
                  getting ready for bed, manners and more.
                </p>
                <p>
                  Baby Signing Time teaches American Sign Language, not made up signs. Baby Signing Time makes it easy
                  for parents and children to learn sign language. As a parent, you do not need to become fluent in sign
                  language, even learning a few signs like ‘milk’, ‘juice’ and ‘more’ can be helpful.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
  )
};

export const query = graphql`
  query {
    star: file(relativePath: { eq: "about/star.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;