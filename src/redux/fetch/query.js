import { createSlice } from "@reduxjs/toolkit";

export const Query = createSlice({
  name: 'query',
  initialState: {
    query: '',
    status: null,
    error: null
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = Query.actions;