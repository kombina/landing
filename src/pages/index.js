import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import kombi from '../../assets/images/kombi.png';

import '../../sass/style.scss';
import './index.scss';

const IndexPage = () => (
  <section className="main-section container">
    <Row>
      <Col className="curved-text text-center">
        <h1>Ligou</h1>
        <h1>Chegou!</h1>
      </Col>
    </Row>
    <Row className="justify-content-end">
      <Col className="curved-text second-line" xs={12} md={6}>
        <h4>
          {`
            Tomar um
            bom chopp
            kombina com
            whatsapp!
          `}
        </h4>
      </Col>
      <Col xs={12} md={6}>
        <img src={kombi} alt="Logo" />
      </Col>
    </Row>
  </section>
);

export default IndexPage;
