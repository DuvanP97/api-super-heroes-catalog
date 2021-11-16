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

const CardSuperHeroesInfo: React.FC<ISearchNameData> = (data: ISearchNameData) => {
  return (
    <React.Fragment>
      <Row>
        <Col sm="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">{data.data.results[0].name}</CardTitle>
              <CardImg
                alt="Card image cap"
                src={data.data.results[0].image.url}
                top
                width="100px"
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
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
                        <CardText>{data.data.results[0].biography['full-name']}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          alter-egos
                        </CardSubtitle>
                        <CardText>{data.data.results[0].biography['alter-egos']}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          aliases
                        </CardSubtitle>
                        <List type="unstyled">
                          <li>{data.data.results[0].biography.aliases[0]}</li>;
                        </List>
                        <CardSubtitle className="text-muted" tag="h6">
                          place-of-birth
                        </CardSubtitle>
                        <CardText>{data.data.results[0].biography['place-of-birth']}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          first-appearance
                        </CardSubtitle>
                        <CardText>{data.data.results[0].biography['first-appearance']}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          publisher
                        </CardSubtitle>
                        <CardText>{data.data.results[0].biography.publisher}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          alignment
                        </CardSubtitle>
                        <CardText>{data.data.results[0].biography.alignment}</CardText>
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
                        <CardText>{data.data.results[0].appearance.gender}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          race
                        </CardSubtitle>
                        <CardText>{data.data.results[0].appearance.race}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          height
                        </CardSubtitle>
                        <List type="unstyled">
                          <li>{data.data.results[0].appearance.height[0]}</li>
                        </List>
                        <CardSubtitle className="text-muted" tag="h6">
                          weight
                        </CardSubtitle>
                        <List type="unstyled">
                          <li>{data.data.results[0].appearance.weight[0]}</li>
                        </List>
                        <CardSubtitle className="text-muted" tag="h6">
                          eye-color
                        </CardSubtitle>
                        <CardText>{data.data.results[0].appearance['eye-color']}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          hair-color
                        </CardSubtitle>
                        <CardText>{data.data.results[0].appearance['hair-color']}</CardText>
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
                        <CardText>{data.data.results[0].work.occupation}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          base
                        </CardSubtitle>
                        <CardText>{data.data.results[0].work.base}</CardText>
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
                        <CardText>{data.data.results[0].connections['group-affiliation']}</CardText>
                        <CardSubtitle className="text-muted" tag="h6">
                          relatives
                        </CardSubtitle>
                        <CardText>{data.data.results[0].connections.relatives}</CardText>
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CardSuperHeroesInfo;
