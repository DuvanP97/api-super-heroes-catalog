import { AnyAction, CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';
import { RootState } from '../states';
import storage from 'redux-persist/lib/storage';
import heroesSlice from './slices/heroes.slice';
import searchSlice from './slices/search.slice';
import filtersPowerstatSlice from './slices/filtersPowerstat.slice';
import filtersAppearanceSlice from './slices/filtersAppearance.slice';

export const appReducer = combineReducers({
  heroesData: heroesSlice,
  searchData: searchSlice,
  filterPowerstat: filtersPowerstatSlice,
  filterAppearance: filtersAppearanceSlice,
});

export const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer: Reducer<CombinedState<any>, AnyAction> = (
  state: RootState,
  action: AnyAction
) => {
  if (action.type === 'CLEAN/cleanState') {
    storage.removeItem('persist:root');
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
