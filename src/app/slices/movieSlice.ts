import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMovie, IResponseSearch } from "../../utils/types";
import { api } from "../api";

interface CatalogState {
  items: IMovie[],
}

const initialState: CatalogState = {
  items: [],
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IResponseSearch>) => {
      state.items = action.payload.Search as IMovie[];
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        api.endpoints.getMoviesByName.matchFulfilled,
        (state, action) => {
          state.items = action.payload as IMovie[];
        }
      );
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { setItems } = moviesSlice.actions;