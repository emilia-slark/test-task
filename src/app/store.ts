import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/movieSlice";
import { userReducer } from "./slices/userSlice"
import { api } from "./api";
import { setupListeners } from '@reduxjs/toolkit/query'
import { favoritesReducer } from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store