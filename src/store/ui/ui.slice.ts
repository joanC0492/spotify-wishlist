import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  modal: boolean;
}

const initialState: UiState = {
  modal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    changeModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
});
export const { openModal, closeModal, changeModal } = uiSlice.actions;