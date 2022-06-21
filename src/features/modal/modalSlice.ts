import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../config/store';

interface InitialState {
  isOpen: boolean;
  text: string;
}

const initialState: InitialState = {
  isOpen: false,
  text: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const isOpen = (state: RootState) => state.modal.isOpen;

export default modalSlice.reducer;
