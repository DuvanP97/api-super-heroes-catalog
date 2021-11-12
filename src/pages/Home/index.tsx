import * as React from 'react';
import CardSuperHeroes from '../../components/CardSuperHeroes';
import NavBar from '../../components/NavBar';
import { HomeContainer, NavBarContainer, Title, TitleContainer } from './styles';
import { HeoresDataThunk } from '../../actions/Thunks/CatalogThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import toast from 'react-hot-toast';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector((state) => state.heroesdata);

  const getHeroeData = React.useCallback(async () => {
    const heroes = await dispatch(HeoresDataThunk(45));

    if (HeoresDataThunk.rejected.match(heroes)) {
      toast.error(heroes.payload as string);
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
      {heroes.heroes && (
        <React.Fragment>
          <CardSuperHeroes name={heroes.heroes.name} img={heroes.heroes.image.url} />;
          {/* {heroes.heroes.map((heroe: any) => {
            <CardSuperHeroes name={heroe.name} img={heroe.url} />;
          })} */}
        </React.Fragment>
      )}
    </HomeContainer>
  );
};

export default Home;
