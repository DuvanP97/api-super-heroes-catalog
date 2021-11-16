import * as React from 'react';
import FilterBarAppearance from '../../components/FilterBarA';
import NavBar from '../../components/NavBar';
import { HomeContainer, NavBarContainer, Title, TitleContainer } from './styles';

const AppearanceFilter: React.FC = () => {
  return (
    <HomeContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <TitleContainer>
        <Title>SUPERHERO API - APPEARANCE FILTER</Title>
      </TitleContainer>
      <FilterBarAppearance />
    </HomeContainer>
  );
};

export default AppearanceFilter;
