import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Designed and Developed by <div className="footer-signature">Giuseppe Conticchio</div></h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} <div className="footer-signature">GC</div></h3>
        </Col>
        <Col md="4" className="footer-contact">
          <ul class="share-icons">
            <h3><a href="/contacts">Have a question or want to work together?</a></h3>
            <li class="share-icons__block">
              <div class="share-icons__block-left">&#60;</div>
              <div class="share-icons__block-right">&#47;&#62;</div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
