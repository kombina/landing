import React from 'react';

import {
  Row,
  Col,
} from 'reactstrap';

import './main.scss';

const NewsListing = props => (
  <section className="main">
    <div className="container">
      <Row>
        <Col xs={6}>
          <h4 className="features-title">
            If you're looking
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ul className="features-list">
            {props.data.map((item, i) =>
              (<li className="features-list-item" key={i}>
                {item.title}
              </li>),
            )}
          </ul>
        </Col>
      </Row>
    </div>
  </section>
);

export default NewsListing;
