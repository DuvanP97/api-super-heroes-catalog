import { createSlice } from '@reduxjs/toolkit';
import { HeoresDataThunk } from '../../actions/Thunks/CatalogThunk';

const HEROES = 'HEROES';

const initialState: any = {
  heroes: null,
};

const heroesSlice = createSlice({
  name: HEROES,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HeoresDataThunk.fulfilled, (state, { payload }) => {
      state.heroes = payload;
    });
  },
});

export default heroesSlice.reducer;
