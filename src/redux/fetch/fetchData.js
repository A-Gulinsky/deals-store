import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchItems = createAsyncThunk(
  'data/fetchItems',
  async function (_, {rejectWithValue}) {
    try {
      const response = await fetch('/api/products?limit=4&page=1')

      if (!response.ok) {
        throw new Error('Server Error')
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchData = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: null,
    error: null
  },
  extraReducers: {
    [fetchItems.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.data = action.payload
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

export const { clearData } = fetchData.actions

export default fetchData.reducer