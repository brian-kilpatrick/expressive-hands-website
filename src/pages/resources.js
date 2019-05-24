import React from 'react';
import Layout from "../components/layout/layout"
import pattern from '../../content/images/pattern.png';
import '../components/resources.scss';
import { Container, Row, Col } from "react-bootstrap";

const Resources = ({data}) => {
  return (
      <Layout title="Resources">
        <div className="resources-wrapper">
          <div className="section-header" style={{backgroundImage: `url(${pattern})`}}>
            Resources
          </div>
          <Container>
            <Row>
              <Col>
                <div className="links">
                  <h4>American Sign Language Education</h4>
                  <p><a target="_blank" href="https://signitasl.com/">SignIt! ASL</a></p>
                  <p><a target="_blank" href="http://www.lifeprint.com">LifePrint</a></p>
                  <h4>Philadelphia Area:</h4>
                  <p><a target="_blank" href="https://dhcc.org/education/">Deaf-Hearing Communication Centre</a></p>
                  <p><a target="_blank" href="https://psd.org/">Pennsylvania School for the Deaf</a></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
  )
};


export default Resources;