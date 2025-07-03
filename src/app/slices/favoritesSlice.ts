import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from "../../utils/types";

interface FavoritesState {
  items: IMovie[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IMovie>) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(item => item.imdbID !== action.payload.id)
    }
  }
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addItem, deleteItem } = favoritesSlice.actions;