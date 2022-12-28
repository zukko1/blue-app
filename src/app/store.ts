import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import modalReducer from '../features/modal/modalSlice'
import searchReducer from '../features/search/searchSlice'
import paginatorReducer from '../features/paginator/paginatorSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
    paginator: paginatorReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
