import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { RootState } from '../../app/store'
import fetchSearchGifs from './searchAPI'
import { Gif, SearchState } from './types'

const initialState: SearchState = {
  loading: false,
  error: null,
  query: null,
  gifs: [],
}

export const fetchSearch = createAsyncThunk('search/fetchSearcch', async (query: string) => {
  const response: AxiosResponse<{ data: Gif[] }> = await fetchSearchGifs(query)
  return response.data.data
})

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state: SearchState) => {
        state.loading = true
      })
      .addCase(fetchSearch.fulfilled, (state: SearchState, action: PayloadAction<Gif[]>) => {
        state.loading = false
        state.gifs = action.payload
      })
      .addCase(fetchSearch.rejected, (state: SearchState) => {
        state.loading = false
        state.error = 'Has ocurred an error'
      })
  },
})

export const selectGifs = (state: RootState) => {
  return state.search
}

export default searchSlice.reducer
