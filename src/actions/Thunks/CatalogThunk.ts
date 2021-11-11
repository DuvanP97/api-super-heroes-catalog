import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetSuperHeroeId } from '../ApiClient/CatalogActions';

export const HeoresDataThunk = createAsyncThunk('user/info', async (_, { rejectWithValue }) => {
  try {
    const HeroeData = await GetSuperHeroeId();
    return HeroeData;
  } catch (error) {
    return rejectWithValue(GetErrorMessage(error));
  }
});
