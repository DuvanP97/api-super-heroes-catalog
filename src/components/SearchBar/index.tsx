import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { InputGroup, Input, Button } from 'reactstrap';
import toast from 'react-hot-toast';
import CardSuperHeroesInfo from '../CardSuperHeroesInfo';
import { SearchNameThunk } from '../../actions/Thunks/CatalogThunk';

const SearchBar: React.FC<any> = ({ value }) => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.searchData);

  const [name, setName] = React.useState('');

  const onChangeName = (e: any) => setName(e.target.value);

  const getHeroeData = React.useCallback(async () => {
    const search = await dispatch(SearchNameThunk(name));

    if (SearchNameThunk.rejected.match(search)) {
      toast.error(search.payload as string);
    }
  }, [dispatch, name]);

  return (
    <React.Fragment>
      <InputGroup>
        <Input className="name" id="name" value={value} onChange={onChangeName} />
        <Button color="warning" onClick={getHeroeData}>
          SEARCH
        </Button>
        {search.search && (
          <React.Fragment>
            <CardSuperHeroesInfo data={search.search} />;
          </React.Fragment>
        )}
      </InputGroup>
    </React.Fragment>
  );
};

export default SearchBar;
