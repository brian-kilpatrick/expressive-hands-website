import React from 'react';
import Layout from "../components/layout/layout"
import pattern from '../../content/images/pattern.png';
import { Container, Row, Col } from "react-bootstrap";
import MailSignUp from '../components/MailSignUp';
import { Helmet } from "react-helmet"
import '../components/contact.scss'

const Contact = ({data}) => {
  return (
      <Layout title='Contact Us'>
        <Helmet>
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
          <script type='text/javascript' dangerouslySetInnerHTML={{__html:`
          (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='zip';}(jQuery));var $mcj = jQuery.noConflict(true);
        `}}/>
        </Helmet>
        <div className="contact-wrapper">
          <div className="section-header" style={{backgroundImage: `url(${pattern})`}}>
            Contact Us
          </div>
          <Container className="contact-content">
            <Row>
              <Col>
                <h4>Starlita Kilpatrick</h4>
                <span>Owner | Certified Baby Signing Time Instructor</span><br/>
                <a href="mailto:info@myexpressivehands.com">info@myexpressivehands.com</a>
                <a href="tel:267-225-8626">267-225-8626</a><br/>
                <b>Follow Us on Social Media</b><br/>
                <span>Facebook: <a href="http://www.facebook.com/MyExpressiveHands" target="_blank">www.facebook.com/MyExpressiveHands</a></span><br/>
                <span>Instagram: <a href="http://www.instagram.com/MyExpressiveHands" target="_blank">www.instagram.com/MyExpressiveHands</a></span><br/>
                <MailSignUp/>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
  )
};


export default Contact;