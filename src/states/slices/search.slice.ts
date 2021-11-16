import { createSlice } from '@reduxjs/toolkit';
import { SearchNameThunk } from '../../actions/Thunks/CatalogThunk';

const SEARCH = 'SEARCH';

const initialState: any = {
  search: null,
};

const searchSlice = createSlice({
  name: SEARCH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SearchNameThunk.fulfilled, (state, { payload }) => {
      state.searchData = payload;
    });
  },
});

export default searchSlice.reducer;
