import React from "react";
import { Col, Row } from "react-bootstrap";

export const ColumnSkill = ({ value, lg, md }) => {

  return (
    <Col md={{ span: md}} lg={{ span: lg }} sm={{ span: 12 }} xs={{ span: 12 }}>
      {value}
    </Col>
  );
};

const SkillAndAbilityComponent = ({ title, value }) => {
  return (
    <>
      {value.map((val, i) => {
        return (
          <Row key={i + val.name} className="mt-3 justify-content-center">
            <ColumnSkill value={val.name} lg={5} md={5} />
            <ColumnSkill value={val.type} lg={4} md={4} />
            <ColumnSkill value={val.damage} lg={3} md={3} />
          </Row>
        );
      })}
    </>
  );
};

export default SkillAndAbilityComponent;
