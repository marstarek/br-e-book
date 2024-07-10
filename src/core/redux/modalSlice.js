// features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  page:"",
  refetch:null,
  title: "",
  endPoint: "",
  selected:""
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.page = action.payload.page;
      state.refetch = action.payload.refetch;
      state.title = action.payload.title;
      state.endPoint=action.payload.endPoint
      state.selected=action.payload.selected;
    
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.page = '';
      state.refetch = null;
      state.title = '';
      state.endPoint = '';
      state.selected = '';

    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
