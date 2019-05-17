import React from 'react';
import Layout from "../components/layout/layout"
import pattern from '../../content/images/pattern.png';
import '../components/resources.scss';
import { Container, Row, Col } from "react-bootstrap";

const Resources = ({data}) => {
  return (
      <Layout>
        <div className="resources-wrapper">
          <div className="section-header" style={{backgroundImage: `url(${pattern})`}}>
            Resources
          </div>
          <Container>
            <Row>
              <Col>
                <div className="links">
                  <p><a target="_blank" href="http://www.signingtime.com">SigningTime.com</a></p>
                  <p><a target="_blank" href="https://signitasl.com/">SignIt! ASL</a></p>
                  <h4>Local ASL resources:</h4>
                  <p><a target="_blank" href="https://thenestinghouse.net/">The Nesting House</a></p>
                  <p><a target="_blank" href="https://www.kithkin-community.com/">Kith + Kin</a></p>
                  <p><a target="_blank" href="http://www.southphillyparents.org/">Lilypad</a></p>
                  <p><a target="_blank" href="https://www.nestcentercity.com/">Nest</a></p>
                  <p><a target="_blank" href="https://rompnroll.com/">Romp & Roll</a></p>
                  <p><a target="_blank" href="http://www.luluscasita.com/">Lulu’s Casita</a></p>
                  <p><a target="_blank" href="https://smithplayground.org/">Smith Playground & Memorial House</a></p>
                  <p><a target="_blank" href="https://lifecyclewomancare.org/">The Birth Center at Lifecycle Womancare</a></p>
                  <p><a target="_blank" href="https://balancedbreastfeeding.com/">Balanced Breastfeeding</a></p>
                  <p><a target="_blank" href="https://maternitycarecoalition.org/">Maternity Care Coalition</a></p>
                  <p><a target="_blank" href="https://www.nursefamilypartnership.org/">Nurse-Family Partnership</a></p>
                  <p><a target="_blank" href="http://mainlineparent.com/">Mainline Parent</a></p>
                  <p><a target="_blank" href="http://phillyfamily.com/">Philadelphia Family</a></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
  )
};


export default Resources;