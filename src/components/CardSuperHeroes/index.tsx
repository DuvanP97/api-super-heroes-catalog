import * as React from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, Row } from 'reactstrap';
interface CardSuperHeroesProps {
  name: string;
  img: string;
}

const CardSuperHeroes: React.FC<CardSuperHeroesProps> = ({ name, img }) => {
  return (
    <React.Fragment>
      <Row>
        <Col sm="3">
          <Card>
            <CardImg alt="Card image cap" src={img} top width="100%" height="350" />
            <CardBody>
              <CardTitle tag="h5">{name}</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CardSuperHeroes;
