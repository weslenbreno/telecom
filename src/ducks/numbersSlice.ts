import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import api from 'config/api';

interface NumbersStater {
  status: {
    id: string | number | null,
    type: 'deleted' | 'updated' | 'created' | null;
  } | null;
  data: any[];
  next: number | null;
  prev: number | null;
  total: number;
  loading: boolean;
  error: {
    statusCode: boolean;
    msg?: string;
  } | null;
}

const initialState: NumbersStater = {
  data: [],
  status: null,
  total: 0,
  next: null,
  prev: null,
  loading: false,
  error: null,
};

export const numberSlice = createSlice({
  name: 'Numbers',
  initialState,
  reducers: {
    onSetError: (state, { payload }) => {
      state.error = payload;
    },
    onSetLoading: (state, { payload }) => {
      state.loading = payload;
    },
    onSetStatus: (state, { payload }) => {
      state.status = payload;
    },
    onSuccess: (state) => {
      state.error = null;
    },
    listNumbers: (state, { payload }) => {
      state = { ...state, ...payload };
      return state;
    },
    onFilteringList: (state, { payload }) => {
      state = { ...state, ...payload };
      return state;
    },
    addNumber: (state, { payload }) => {
      state.data.push(payload);
      state.status = {
        id: payload.id,
        type: 'created'
      };
      return state;
    },
    deleteNumber: (state, { payload }) => {
      state.data = state.data.filter((number) => number.id !== payload?.id);
      state.total -= 1;
      state.status = {
        id: payload.id,
        type: 'deleted'
      };
      return state;
    },
    updateNumber: (state, { payload }) => {
      state.data = state.data.map((number) =>
        payload?.id === number.id ? payload : number
      );
      state.status = {
        id: payload.id,
        type: 'updated'
      };
      return state;
    },
  },
});

export const {
  onSetLoading,
  onSetStatus,
  listNumbers,
  addNumber,
  deleteNumber,
  updateNumber,
  onSetError,
} = numberSlice.actions;

export const listNumbersAsync = (
  page: number = 1,
  query: string = ''
): AppThunk => async (dispatch) => {
  try {
    dispatch(onSetLoading(true));
    const data = await api(
      `numbers?pageSize=10&pageOffset=${page}&query=${query}`
    );
    dispatch(listNumbers(data));
    dispatch(onSetLoading(false));
  } catch (e) {
    dispatch(
      onSetError({
        statusCode: e?.status || 444,
        msg: 'Error on fetching numbers',
      })
    );
  }
  dispatch(onSetLoading(false));
};

export const createNumberAsync = (body: any): AppThunk => async (dispatch) => {
  try {
    dispatch(onSetLoading(true));
    const data = await api(`numbers`, {
      method: 'POST',
      body: body,
    });
    dispatch(addNumber(data?.number));
  } catch (e) {
    console.log(e);
    dispatch(
      onSetError({
        statusCode: e?.status || 444,
        msg: e.error || 'Error on creating number',
      })
    );
  }
  dispatch(onSetLoading(false));
};

export const updateNumberAsync = (body: any): AppThunk => async (dispatch) => {
  try {
    dispatch(onSetLoading(true));
    if (!body?.id) throw new Error('ID is undefined');
    const data = await api(`numbers/${body.id}`, {
      method: 'PATCH',
      body: body,
    });
    dispatch(updateNumber(data?.number));
  } catch (e) {
    dispatch(
      onSetError({
        statusCode: e?.status || 444,
        msg: 'Error on updating number',
      })
    );
  }
  dispatch(onSetLoading(false));
};

export const deleteNumberAsync = (id: string | number | undefined): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(onSetLoading(true));
    if (!id) throw new Error('ID is undefined');
    const data = await api(`numbers/${id}`, {
      method: 'DELETE',
    });
    dispatch(deleteNumber(data?.number));
  } catch (e) {
    dispatch(
      onSetError({
        statusCode: e?.status || 444,
        msg: 'Error on deleting number',
      })
    );
  }
  dispatch(onSetLoading(false));
};

export const selectNumbers = (state: RootState) => state.numbers;

export default numberSlice.reducer;
