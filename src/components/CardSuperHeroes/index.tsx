import * as React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Col,
  Row,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { PaginationContainer } from './styles';

const CardSuperHeroes: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm="3">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://www.superherodb.com/pictures2/portraits/10/100/10255.jpg"
              top
              width="100%"
              height="350"
            />
            <CardBody>
              <CardTitle tag="h5">Agent Bob - Intelligence</CardTitle>
              <Button color="danger" onClick={function noRefCheck() {}}>
                Click Me
              </Button>
              <Modal toggle={function noRefCheck() {}}>
                <ModalHeader charCode="Y" toggle={function noRefCheck() {}}>
                  Modal title
                </ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={function noRefCheck() {}}>
                    Do Something
                  </Button>{' '}
                  <Button onClick={function noRefCheck() {}}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <PaginationContainer>
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
      </PaginationContainer>
    </React.Fragment>
  );
};

export default CardSuperHeroes;
