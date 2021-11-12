import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HeoresDataThunk } from '../../actions/Thunks/CatalogThunk';

const HEROES = 'HEROES';

const initialState: IHeroesDataSlice = {
  heroes: [],
};

const heroesSlice = createSlice({
  name: HEROES,
  initialState,
  reducers: {
    setHeroDataReducer(state, action: PayloadAction<{ item: IHeroDataId; index: number }>) {
      let newArray = state.heroes.slice();
      newArray.splice(action.payload.index, 0, action.payload.item);
      return { ...state, heroes: newArray };
    },
  },
});

export const { setHeroDataReducer } = heroesSlice.actions;
export default heroesSlice.reducer;
