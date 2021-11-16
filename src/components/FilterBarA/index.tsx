import * as React from 'react';
import toast from 'react-hot-toast';
import { Card, CardBody, CardImg, CardTitle, Col, FormGroup, Input, Row } from 'reactstrap';
import { FilterAppearanceThunk } from '../../actions/Thunks/CatalogThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const FilterBarAppearance: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector((state) => state.filterAppearance);

  const getHeroeData = React.useCallback(async () => {
    const heroes = await dispatch(FilterAppearanceThunk());
    if (FilterAppearanceThunk.rejected.match(heroes)) {
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
          <option>name</option>
          <option>gender</option>
          <option>race</option>
          <option>height</option>
          <option>weight</option>
          <option>eye-color</option>
          <option>hair-color</option>
        </Input>
      </FormGroup>
      <Row>
        {heroes.filterAppearance &&
          heroes.filterAppearance.results.map((hero: any) => (
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

export default FilterBarAppearance;
