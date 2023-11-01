import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuery = createAsyncThunk(
  'storeData/fetchQuery',
  async function (query, {rejectWithValue}) {
    try {
      const response = await fetch(`/api/products_search/${query}?limit=5&page=1`)

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

export const fetchStoreItems= createAsyncThunk(
  'storeData/fetchStoreItems',
  async function (_, {rejectWithValue}) {
    try {
      const response = await fetch(`/api/products?limit=5&page=1`)

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

export const loadMoreBtnStoreItems = createAsyncThunk(
  'storeData/LoadMoreBtnStoreItems',
  async function (page, {rejectWithValue}) {
    try {
      const response = await fetch(`/api/products?limit=5&page=${page}`)

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

export const loadMoreBtnQueryItems = createAsyncThunk(
  'loadMoreBtnQueryItems/fetchQuery',
  async function ({query, page}, {rejectWithValue}) {
    try {
      const response = await fetch(`/api/products_search/${query}?limit=5&page=${page}`)

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



export const fetchStoreData = createSlice({
  name: 'storeData',
  initialState: {
    storeData: [],
    status: null,
    error: null
  }, 
  extraReducers: {
    [fetchQuery.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchQuery.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.storeData = action.payload
      
    },
    [fetchQuery.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchStoreItems.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchStoreItems.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.storeData = action.payload
      
    },
    [fetchStoreItems.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
      
    },
    [loadMoreBtnStoreItems.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [loadMoreBtnStoreItems.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.storeData = [...state.storeData,...action.payload]
      
    },
    [loadMoreBtnStoreItems.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
      
    },
    [loadMoreBtnQueryItems.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [loadMoreBtnQueryItems.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.storeData = [...state.storeData,...action.payload]
      
    },
    [loadMoreBtnQueryItems.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

export const { clearData } = fetchStoreData.actions

export default fetchStoreData.reducer