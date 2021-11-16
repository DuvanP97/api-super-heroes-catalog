import { createSlice } from '@reduxjs/toolkit';
import { FilterPowerstatThunk } from '../../actions/Thunks/CatalogThunk';

const FILTERP = 'FILTERP';

const initialState: any = {
  filterpowerstat: null,
};

const filterPowerstatSlice = createSlice({
  name: FILTERP,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FilterPowerstatThunk.fulfilled, (state, { payload }) => {
      state.filterPowerstat = payload;
    });
  },
});

export default filterPowerstatSlice.reducer;
