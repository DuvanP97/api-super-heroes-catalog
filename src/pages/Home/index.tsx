import * as React from 'react';
import CardSuperHeroes from '../../components/CardSuperHeroes';
import NavBar from '../../components/NavBar';
import { HomeContainer, NavBarContainer, Title, TitleContainer } from './styles';

const Home: React.FC<any> = () => {
  return (
    <HomeContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <TitleContainer>
        <Title>SUPERHERO API</Title>
      </TitleContainer>
      <CardSuperHeroes />
    </HomeContainer>
  );
};

export default Home;
