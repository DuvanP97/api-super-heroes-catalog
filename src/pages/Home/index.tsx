import * as React from 'react';
import CardSuperHeroes from '../../components/CardSuperHeroes';
import NavBar from '../../components/NavBar';
import { HomeContainer, NavBarContainer, Title, TitleContainer } from './styles';

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <HomeContainer>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <TitleContainer>
          <Title>SUPERHERO API - HOME / DASHBOARD</Title>
        </TitleContainer>
        {/* <React.Fragment> */}
        {/* {heroes.heroes &&
          ids.map((ids, index) => (
            <Row> */}
        <CardSuperHeroes />
        {/* </Row>
          ))}
      </React.Fragment> */}
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
