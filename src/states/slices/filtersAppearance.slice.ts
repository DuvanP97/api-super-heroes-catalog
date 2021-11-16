import { createSlice } from '@reduxjs/toolkit';
import { FilterAppearanceThunk } from '../../actions/Thunks/CatalogThunk';

const FILTERA = 'FILTERA';

const initialState: any = {
  filterappearance: null,
};

const filterAppearanceSlice = createSlice({
  name: FILTERA,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FilterAppearanceThunk.fulfilled, (state, { payload }) => {
      state.filterAppearance = payload;
    });
  },
});

export default filterAppearanceSlice.reducer;
