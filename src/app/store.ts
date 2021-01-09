import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import numbersReducer from 'ducks/numbers';

export const store = configureStore({
  reducer: {
    numbers: numbersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
