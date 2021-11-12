import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetSearchName, GetSuperHeroeId } from '../ApiClient/CatalogActions';

export const HeoresDataThunk = createAsyncThunk(
  'heroes/infoHero',
  async (id: number, { rejectWithValue }) => {
    try {
      const HeroeData = await GetSuperHeroeId(id);
      return HeroeData;
    } catch (error) {
      return rejectWithValue(GetErrorMessage(error));
    }
  }
);

export const SearchNameThunk = createAsyncThunk(
  'heroes/search',
  async (name: string, { rejectWithValue }) => {
    try {
      const InfoSuperHero = await GetSearchName(name);
      return InfoSuperHero;
    } catch (error) {
      return rejectWithValue(GetErrorMessage(error));
    }
  }
);
