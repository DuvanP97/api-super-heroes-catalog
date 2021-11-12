import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetSuperHeroeId } from '../ApiClient/CatalogActions';

export const HeoresDataThunk = createAsyncThunk(
  'heroes/infoHero',
  async (_, { rejectWithValue }) => {
    try {
      const HeroeData = await GetSuperHeroeId();
      return HeroeData;
    } catch (error) {
      return rejectWithValue(GetErrorMessage(error));
    }
  }
);
