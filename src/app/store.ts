import { configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import numbersReducer from 'ducks/numbersSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: '@telecom',
  storage: storage
}

const rootReducer = combineReducers({
  numbers: numbersReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
