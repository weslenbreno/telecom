import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';

interface NumbersStater {
  available: any[];
}

const initialState: NumbersStater = {
  available: [],
};

export const numberSlice = createSlice({
  name: 'Numbers',
  initialState,
  reducers: {
    listNumbers: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return state;
    },    
    addNumber: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return state;
    },
    deleteNumber: state => {
      return state;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateNumber: (state, action: PayloadAction<number>) => {
      return state;
    },
  },
});

export const { listNumbers, addNumber, deleteNumber, updateNumber } = numberSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const listNumbersAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(listNumbers());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNumbers = (state: RootState) => state.numbers;

export default numberSlice.reducer;
