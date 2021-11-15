import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const NotFound = (): JSX.Element => {
  const history = useHistory();

  const navegationHome = () => {
    history.push('/');
  };

  return (
    <React.Fragment>
      <h1>404 - error</h1>
      <Button onClick={navegationHome} color="warning" outline>
        RETURN
      </Button>
    </React.Fragment>
  );
};

export default NotFound;
