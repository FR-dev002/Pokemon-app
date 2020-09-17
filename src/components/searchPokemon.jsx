import React from "react";
import { Row, Form, FormControl, Col, Container } from "react-bootstrap";

const SearchPokemonComponent = ({ onChange, onSubmit }) => {
  return (
    <Container
      style={{ positin: "fixed", top: 0 }}
      className="justify-content-center mt-5"
    >
        <Form onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}>
          <Form.Group >
            <Form.Control type="text" placeholder="Search Pokemon" onChange={(e) => onChange(e)} />
          </Form.Group>
        </Form>
    </Container>
  );
};

export default SearchPokemonComponent;
