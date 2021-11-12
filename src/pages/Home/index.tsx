import * as React from 'react';
import { useState } from 'react';
import CardSuperHeroes from '../../components/CardSuperHeroes';
import NavBar from '../../components/NavBar';
import { HomeContainer, NavBarContainer, Title, TitleContainer } from './styles';
import { HeoresDataThunk } from '../../actions/Thunks/CatalogThunk';
import { useAppDispatch } from '../../hooks/redux';
import toast from 'react-hot-toast';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [heroesInfo, setHeroesInfo] = useState<IHeroDataId>();

  const getHeroeData = React.useCallback(async () => {
    const heroeData = await dispatch(HeoresDataThunk());
    if (HeoresDataThunk.rejected.match(heroeData)) {
      toast.error(heroeData.payload as string);
    }
  }, [dispatch]);

  React.useEffect(() => {
    getHeroeData();
  }, [getHeroeData]);

  return (
    <HomeContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <TitleContainer>
        <Title>SUPERHERO API - HOME / DASHBOARD</Title>
      </TitleContainer>
      <CardSuperHeroes />
    </HomeContainer>
  );
};

export default Home;
