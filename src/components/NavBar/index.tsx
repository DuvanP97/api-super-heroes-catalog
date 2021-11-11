import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FONT_COLOR, WHITE_COLOR } from '../../assets/styles/colors';

const NavBar: React.FC<any> = () => {
  const history = useHistory();

  const navegation = () => {
    history.push('/');
  };

  const navegationTwo = () => {
    history.push('/filter');
  };

  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink
            active={true}
            onClick={navegation}
            style={{
              backgroundColor: FONT_COLOR,
              color: WHITE_COLOR,
            }}
          >
            Filter Super Heroes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={false}
            onClick={navegationTwo}
            style={{
              color: WHITE_COLOR,
            }}
          >
            Busqueda por Nombrrer
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
