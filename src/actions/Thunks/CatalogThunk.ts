import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import {
  GetSearchName,
  GetSuperHeroeId,
  GetDataFilterAppearance,
  GetDataFilterPowerstat,
} from '../ApiClient/CatalogActions';

export const HeoresDataThunk = createAsyncThunk(
  'heroes/infoHero',
  async (letter: string, { rejectWithValue }) => {
    try {
      const HeroeData = await GetSuperHeroeId(letter);
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

export const FilterPowerstatThunk = createAsyncThunk(
  'heroes/filterpowerstat',
  async (Powerstat: IPowerstatThunk, { rejectWithValue }) => {
    try {
      const { id, powerstat } = Powerstat;
      const FilterPower = await GetDataFilterPowerstat(id, powerstat);
      return FilterPower;
    } catch (error) {
      return rejectWithValue(GetErrorMessage(error));
    }
  }
);

export const FilterAppearanceThunk = createAsyncThunk(
  'heroes/filterappearance',
  async (Powerstat: IAppearanceThunk, { rejectWithValue }) => {
    try {
      const { id, appearance } = Powerstat;
      const FilterAppearance = await GetDataFilterAppearance(id, appearance);
      return FilterAppearance;
    } catch (error) {
      return rejectWithValue(GetErrorMessage(error));
    }
  }
);
