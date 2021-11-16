import * as React from 'react';
import FilterBarPowerstat from '../../components/FilterBar';
import NavBar from '../../components/NavBar';
import { HomeContainer, NavBarContainer, Title, TitleContainer } from './styles';

const PowerstatsFilter = (): JSX.Element => {
  return (
    <HomeContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <TitleContainer>
        <Title>SUPERHERO API - POWERSTATS FILTER</Title>
      </TitleContainer>
      <FilterBarPowerstat />
    </HomeContainer>
  );
};

export default PowerstatsFilter;
