import * as React from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, Row } from 'reactstrap';
import { HeoresDataThunk } from '../../actions/Thunks/CatalogThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const CardSuperHeroes: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector((state) => state.heroesData);

  const getHeroeData = React.useCallback(async () => {
    const heroes = await dispatch(HeoresDataThunk('a'));
    console.log(heroes);
    // if (HeoresDataThunk.rejected.match(heroes)) {
    //   toast.error(search.payload as string);
    // }
  }, [dispatch]);

  React.useEffect(() => {
    getHeroeData();
  }, [getHeroeData]);

  return (
    <React.Fragment>
      <Row>
        {heroes.heroesData &&
          heroes.heroesData.results.map((hero: any) => (
            <Col sm="3">
              <Card>
                <CardImg alt="Card image cap" src={hero.image.url} top width="100%" height="350" />
                <CardBody>
                  <CardTitle tag="h5">{hero.name}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};

export default CardSuperHeroes;
