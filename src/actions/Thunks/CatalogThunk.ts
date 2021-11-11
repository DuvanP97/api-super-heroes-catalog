import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetSuperHeroeId } from '../ApiClient/CatalogActions';

export const HeoresDataThunk = createAsyncThunk('user/info', async (_, { rejectWithValue }) => {
  try {
    console.log('pruebathunk');
    const HeroeData = await GetSuperHeroeId();
    console.log(HeroeData);
    return HeroeData;
  } catch (error) {
    return rejectWithValue(GetErrorMessage(error));
  }
});
