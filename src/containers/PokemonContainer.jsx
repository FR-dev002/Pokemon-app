import React from "react";
import { Container, Card, Row, Col, Badge, Button } from "react-bootstrap";
import { GET_POKEMON } from "../graphql/get-pokemon";
import { useQuery } from "@apollo/react-hooks";
import DetailPokemonImage from "../components/detailPokemonImage";
import DetailInformationComponent from "../components/detailInformationComponent";
import SkillAndAbilityComponent, {
  ColumnSkill,
} from "../components/skillAndAbility";
import ResistantAndWeaknesesComponent from "../components/resistantAndWeaknesess";
import PokemonCardListComponent from "../components/pokemonCardList";

const PokemonDeck = ({ history, match, ...props }) => {
  const ID = match.params.pokemonId;

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id: ID },
  });
  console.log(data);

  if (!loading) {
    return (
      <>
        <Card style={{ width: "70rem" }} className="mt-2">
        <Card.Header>
          <Button md={{span: 2}} onClick={() => history.goBack()}>Back</Button>
        </Card.Header>
          <Card.Body>
            <Card.Body>
              <Row>
                {/* Pokemon Image */}
                <DetailPokemonImage image={data.pokemon.image} />

                <Col
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  sm={{ span: 12 }}
                  xs={{ span: 12 }}
                >
                  <Row
                    className="justify-content-center"
                    style={{ borderBottom: "1px solid grey" }}
                  >
                    <h3>
                      <Badge variant="primary">{data.pokemon.name}</Badge>
                    </h3>
                  </Row>
                  <Row className="pt-2">
                    <Col
                      md={{ span: 6 }}
                      lg={{ span: 6 }}
                      sm={{ span: 12 }}
                      xs={{ span: 12 }}
                      className="p-3"
                    >
                      <Row className="justify-content-center">
                        <h3>
                          <Badge variant="secondary">General</Badge>
                        </h3>
                      </Row>
                      <DetailInformationComponent
                        title="Number"
                        value={data.pokemon.number}
                      />
                      <DetailInformationComponent
                        title="Max HP"
                        value={data.pokemon.maxHP}
                      />
                      <DetailInformationComponent
                        title="Max CP"
                        value={data.pokemon.maxCP}
                      />
                      <DetailInformationComponent
                        title="FleeRate"
                        value={data.pokemon.fleeRate}
                      />
                      <DetailInformationComponent
                        title="Min Height"
                        value={data.pokemon.height.minimum}
                      />
                      <DetailInformationComponent
                        title="Max Height"
                        value={data.pokemon.height.maximum}
                      />
                    </Col>
                    <Col
                      md={{ span: 6 }}
                      lg={{ span: 6 }}
                      sm={{ span: 12 }}
                      xs={{ span: 12 }}
                      className="p-3"
                    >
                      <Row className="justify-content-center">
                        <h3>
                          <Badge variant="secondary">resistant</Badge>
                        </h3>
                      </Row>
                      <ResistantAndWeaknesesComponent
                        value={data.pokemon.resistant}
                      />
                      <Row className="justify-content-center mt-3">
                        <h3>
                          <Badge variant="secondary">weaknesess</Badge>
                        </h3>
                      </Row>
                      <ResistantAndWeaknesesComponent
                        value={data.pokemon.weaknesses}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="pt-3">
                <Row className="justify-content-center mt-3">
                  <h3>
                    <Badge variant="danger">Skill And Abilities</Badge>
                  </h3>
                </Row>
              </Row>
              <Row>
                <Col
                  md={{ span: 6 }}
                  lg={{ span: 6 }}
                  sm={{ span: 12 }}
                  xs={{ span: 12 }}
                >
                  <Row className="justify-content-center mt-3">
                    <label>Fast</label>
                  </Row>
                  <Row className="justify-content-center mt-3">
                    <ColumnSkill md={5} lg={5} value="Name" />
                    <ColumnSkill md={4} lg={4} value="Type" />
                    <ColumnSkill md={3} lg={3} value="Damage" />
                  </Row>
                  <SkillAndAbilityComponent value={data.pokemon.attacks.fast} />
                </Col>
                <Col>
                  <Row className="justify-content-center mt-3">
                    <label>Special</label>
                  </Row>
                  <Row className="justify-content-center mt-3">
                    <ColumnSkill md={5} lg={5} value="Name" />
                    <ColumnSkill md={4} lg={4} value="Type" />
                    <ColumnSkill md={3} lg={3} value="Damage" />
                  </Row>
                  <SkillAndAbilityComponent
                    value={data.pokemon.attacks.special}
                  />
                </Col>
              </Row>

              <Row>
                <Row className="justify-content-center mt-5">
                  <h3>
                    <Badge variant="success">Evolutions</Badge>
                  </h3>
                </Row>
              </Row>
                <Row>
                {data.pokemon.evolutions ? data.pokemon.evolutions.map((row, i) => (
                  <PokemonCardListComponent key={row.id}  row={row} history={history} />
                )) : null }
                </Row>
            </Card.Body>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return null;
  }
};

export default (props) => {
  return (
    <Container>
      <PokemonDeck {...props} />
    </Container>
  );
};
