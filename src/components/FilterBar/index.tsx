import * as React from 'react';
import toast from 'react-hot-toast';
import { Card, CardBody, CardImg, CardTitle, Col, FormGroup, Input, Row } from 'reactstrap';
import { FilterPowerstatThunk } from '../../actions/Thunks/CatalogThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const FilterBarPowerstat: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector((state) => state.filterPowerstat);

  const getHeroeData = React.useCallback(async () => {
    const heroes = await dispatch(FilterPowerstatThunk());
    if (FilterPowerstatThunk.rejected.match(heroes)) {
      toast.error(heroes.payload as string);
    }
  }, [dispatch]);

  React.useEffect(() => {
    getHeroeData();
  }, [getHeroeData]);
  return (
    <React.Fragment>
      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          <option>combat</option>
          <option>durability</option>
          <option>intelligence</option>
          <option>power</option>
          <option>speed</option>
          <option>strength</option>
        </Input>
      </FormGroup>
      <Row>
        {heroes.filterPowerstat &&
          heroes.filterPowerstat.results.map((hero: any) => (
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

export default FilterBarPowerstat;
