import { createSlice } from '@reduxjs/toolkit';
import { SearchNameThunk } from '../../actions/Thunks/CatalogThunk';

const SEARCH = 'SEARCH';

const initialState: any = {
  heroes: null,
};

const searchSlice = createSlice({
  name: SEARCH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SearchNameThunk.fulfilled, (state, { payload }) => {
      state.search = payload;
    });
  },
});

export default searchSlice.reducer;
