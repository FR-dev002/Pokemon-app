import React from "react";
import { Col, Row } from "react-bootstrap";

const DetailInformationComponent = ({ title, value }) => {

  return (
    <Row className="mt-3">
      <Col md={{ span: 6 }} lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }}>
        <label>{title} : </label>
      </Col>
      <Col md={{ span: 6 }} lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }}>
        {value}
      </Col>
    </Row>
  );
};

export default DetailInformationComponent;
