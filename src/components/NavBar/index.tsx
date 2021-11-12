import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { WHITE_COLOR } from '../../assets/styles/colors';
import { Container } from './styles';

const NavBar: React.FC = () => {
  const history = useHistory();

  const navegationHome = () => {
    history.push('/');
  };

  const navegationPower = () => {
    history.push('/powerstats');
  };

  const navegationName = () => {
    history.push('/name');
  };

  const navegationAppe = () => {
    history.push('/appearance');
  };

  return (
    <Container>
      <Nav pills>
        <NavItem>
          <NavLink
            onClick={navegationHome}
            style={{
              color: WHITE_COLOR,
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={navegationPower}
            style={{
              color: WHITE_COLOR,
            }}
          >
            Powerstats Filter
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={navegationName}
            style={{
              color: WHITE_COLOR,
            }}
          >
            Search Name
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={navegationAppe}
            style={{
              color: WHITE_COLOR,
            }}
          >
            Appearance Filter
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default NavBar;
