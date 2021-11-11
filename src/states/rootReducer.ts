import { AnyAction, CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';
import { RootState } from '../states';
import storage from 'redux-persist/lib/storage';

export const appReducer = combineReducers({});

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
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem('persist:root');

    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
