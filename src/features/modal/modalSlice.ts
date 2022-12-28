import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ModalState, Gif } from '../../app/types'

const initialState: ModalState = {
  gif: {
    id: '',
    title: '',
    images: {
      original: {
        url: '',
      },
    },
  },
  index: 0,
  showModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state: ModalState, action: PayloadAction<{ gif: Gif; index: number }>) => {
      state.gif = action.payload.gif
      state.index = action.payload.index
      state.showModal = true
    },
    closeModal: (state: ModalState) => {
      state.showModal = false
    },
  },
})

export const { showModal, closeModal } = modalSlice.actions

export const selectModal = (state: RootState) => {
  return state.modal
}

export default modalSlice.reducer
