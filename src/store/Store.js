import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchApiData = createAsyncThunk(
  'api/fetchApiData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  },
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    status: null,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => ({ ...state, status: 'loading' }))

      .addCase(fetchApiData.fulfilled, (state, action) => ({ ...state, status: 'succeeded', data: action.payload }))

      .addCase(fetchApiData.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export const { actions: apiActions } = apiSlice;

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
});

export default store;
