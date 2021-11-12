import * as React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';

const SearchBar: React.FC<any> = ({ value }) => {
  const [name, setName] = React.useState('');

  const onChangeName = (e: any) => setName(e.target.value);

  const clickSearch = () => {
    console.log(name);
  };

  return (
    <React.Fragment>
      <InputGroup>
        <Input className="name" id="name" value={value} onChange={onChangeName} />
        <Button color="warning" onClick={clickSearch}>
          SEARCH
        </Button>
      </InputGroup>
    </React.Fragment>
  );
};

export default SearchBar;
