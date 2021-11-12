import * as React from 'react';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import { HomeContainer, NavBarContainer, Title, TitleContainer } from './styles';

const SearchName = (): JSX.Element => {
  return (
    <HomeContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <TitleContainer>
        <Title>SUPERHERO API - SEARCH NAME</Title>
      </TitleContainer>
      <SearchBar />
    </HomeContainer>
  );
};

export default SearchName;
