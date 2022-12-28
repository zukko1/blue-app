import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { RootState } from '../../app/store'
import fetchSearchGifs from './searchAPI'
import { Gif, PaginatorState, SearchState } from '../../app/types'

const initialState: SearchState = {
  loading: false,
  error: null,
  gifs: [],
  query: null,
  pagination: {
    totalCount: 0,
    count: 0,
    offset: 0,
  },
}

export const fetchSearch = createAsyncThunk(
  'search/fetchSearcch',
  async ({ query, offset }: { query: string | null; offset: number }) => {
    const response: AxiosResponse<{ data: Gif[]; pagination: PaginatorState }> =
      await fetchSearchGifs(query, offset)
    return response.data
  },
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state: SearchState, action: PayloadAction<string>) => {
        state.query = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state: SearchState) => {
        state.loading = true
      })
      .addCase(
        fetchSearch.fulfilled,
        (
          state: SearchState,
          action: PayloadAction<{ data: Gif[]; pagination: PaginatorState }>,
        ) => {
          state.loading = false
          state.pagination.totalCount = action.payload.pagination.total_count
          state.pagination.count = action.payload.pagination.count
          state.pagination.offset = action.payload.pagination.offset
          state.gifs = action.payload.data
        },
      )
      .addCase(fetchSearch.rejected, (state: SearchState) => {
        state.loading = false
        state.error = 'Has ocurred an error'
      })
  },
})

export const { setQuery } = searchSlice.actions

export const selectTotal = (state: RootState) => {
  return state.search.pagination.totalCount
}

export const selectGifs = (state: RootState) => {
  return state.search
}

export default searchSlice.reducer
