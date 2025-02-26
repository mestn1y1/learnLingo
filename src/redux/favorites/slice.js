import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFavorites,
  addFavoriteToDB,
  removeFavoriteFromDB,
} from "./operations";

const initialState = {
  favorite: [],
  status: "idle",
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.favorite = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favorite = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(addFavoriteToDB.fulfilled, (state, action) => {
        state.favorite.push(action.payload);
      })

      .addCase(removeFavoriteFromDB.fulfilled, (state, action) => {
        state.favorite = state.favorite.filter((id) => id !== action.payload);
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const clearFavorites = favoritesSlice.actions;
