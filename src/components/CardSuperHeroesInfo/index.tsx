import * as React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  List,
  Toast,
  ToastBody,
  ToastHeader,
  Col,
  Row,
} from 'reactstrap';

const CardSuperHeroes: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">Agent Bob - Intelligence</CardTitle>
              <CardImg
                alt="Card image cap"
                src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
                top
                width="100px"
                // height="20%"
              />
              <CardBody>
                <Row>
                  <Col sm="6">
                    <div className="p-3 my-2 rounded">
                      <Toast body>
                        <ToastHeader>Biography</ToastHeader>
                        <ToastBody>
                          <CardSubtitle className="text-muted" tag="h6">
                            full-name
                          </CardSubtitle>
                          <CardText>Bob</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            alter-egos
                          </CardSubtitle>
                          <CardText>No alter egos found.</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            aliases
                          </CardSubtitle>
                          <List type="unstyled">
                            <li>Bob</li>
                            <li>agent of Hydra</li>
                            <li>agent of A.I.M</li>
                          </List>
                          <CardSubtitle className="text-muted" tag="h6">
                            place-of-birth
                          </CardSubtitle>
                          <CardText>-</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            first-appearance
                          </CardSubtitle>
                          <CardText>Cable & Deadpool #38 (May, 2007)</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            publisher
                          </CardSubtitle>
                          <CardText>Marvel Comics</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            alignment
                          </CardSubtitle>
                          <CardText>good</CardText>
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="p-3 my-2 rounded">
                      <Toast body>
                        <ToastHeader>appearance</ToastHeader>
                        <ToastBody>
                          <CardSubtitle className="text-muted" tag="h6">
                            gender
                          </CardSubtitle>
                          <CardText>Male</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            race
                          </CardSubtitle>
                          <CardText>Human</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            height
                          </CardSubtitle>
                          <List type="unstyled">
                            <li>5'10</li>
                            <li>178 cm</li>
                          </List>
                          <CardSubtitle className="text-muted" tag="h6">
                            weight
                          </CardSubtitle>
                          <List type="unstyled">
                            <li>181 lb</li>
                            <li>81 kg</li>
                          </List>
                          <CardSubtitle className="text-muted" tag="h6">
                            eye-color
                          </CardSubtitle>
                          <CardText>Brown</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            hair-color
                          </CardSubtitle>
                          <CardText>Brown</CardText>
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="p-3 my-2 rounded">
                      <Toast body>
                        <ToastHeader>work</ToastHeader>
                        <ToastBody>
                          <CardSubtitle className="text-muted" tag="h6">
                            occupation
                          </CardSubtitle>
                          <CardText>Mercenary, janitor; former pirate, terrorist</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            base
                          </CardSubtitle>
                          <CardText>Mobile; formerly Manhattan, Hellcarrier</CardText>
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="p-3 my-2 rounded">
                      <Toast body>
                        <ToastHeader>connections</ToastHeader>
                        <ToastBody>
                          <CardSubtitle className="text-muted" tag="h6">
                            group-affiliation
                          </CardSubtitle>
                          <CardText>A.I.M., Deadpool; formerly Agency X, Hydra</CardText>
                          <CardSubtitle className="text-muted" tag="h6">
                            relatives
                          </CardSubtitle>
                          <CardText>Allison (ex-wife); Terry and Howie (sons)</CardText>
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CardSuperHeroes;
