import React from "react";
import { Card, Col } from "react-bootstrap";

const DetailPokemonImage = ({ image }) => {
  return (
    <Col
      md={{ span: 4 }}
      lg={{ span: 4 }}
      sm={{ span: 12 }}
      xs={{ span: 12 }}
    >
      <Card style={{ width: "20rem", height: "rem" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={image}
            width={200}
            height={400}
            className="p-3"
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DetailPokemonImage;
