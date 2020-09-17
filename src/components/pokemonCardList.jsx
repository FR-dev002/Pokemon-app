import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


const PokemonCardListComponent = ({row, history, ...props}) => {
    return (
        <Card
        key={row.number}
        style={{ width: "20rem" }}
        className="mt-5 ml-5 fr--card"
        onClick={() => history.push(`/${row.id}`) }
      >
        <Card.Img
          variant="top"
          src={row.image}
          width={100}
          height={200}
          className="p-3"
        />
        <Card.Body>
          <Card.Title className="text-center">{row.name}</Card.Title>
          <Card.Text>{row.classification}</Card.Text>
        </Card.Body>
        <Card.Footer > 
          <small>
            <Row className="text-center">
              <Col style={{ width: "33,3%" }}>
                <Row className="text-center">
                  <Col><p>Number</p></Col>
                </Row>
                <Row className="text-center">
                  <Col>
                    <label className="mr-auto">{row.number}</label>
                  </Col>
                </Row>
              </Col>
              <Col style={{ width: "33,3%" }}>
                <Row className="text-center">
                  <Col><p> Max HP</p></Col>
                </Row>
                <Row className="text-center">
                  <Col>
                    <label className="mr-auto">{row.maxHP}</label>
                  </Col>
                </Row>
              </Col>
              <Col style={{ width: "33,3%" }}>
                <Row className="text-center">
                  <Col> <p>Max CP </p></Col>
                </Row>
                <Row className="text-center">
                  <Col>
                    <label className="mr-auto">{row.maxCP}</label>
                  </Col>
                </Row>
              </Col>
            </Row>
          </small>
        </Card.Footer>
      </Card>
    )
}

export default PokemonCardListComponent