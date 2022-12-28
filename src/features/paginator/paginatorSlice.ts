import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { RootState } from '../../app/store'
import { CammelPaginatorState } from '../../app/types'

const initialState: CammelPaginatorState = {
  count: 0,
  offset: 0,
  totalCount: 0,
}

const paginatorSlice = createSlice({
  name: 'paginator',
  initialState,
  reducers: {
    setPage: (
      state: CammelPaginatorState,
      action: PayloadAction<{ totalCount: number; count: number; offset: number }>,
    ) => {
      state.totalCount = action.payload.totalCount
      state.count = action.payload.count
      state.offset = action.payload.offset
    },
  },
})

export const { setPage } = paginatorSlice.actions

export const selectPaginator = (state: RootState) => {
  return state.paginator
}

export default paginatorSlice.reducer
