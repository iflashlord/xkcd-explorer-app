import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listReducer from '../features/list/listSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
