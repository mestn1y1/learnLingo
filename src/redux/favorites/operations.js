import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../fireBase/firebase-config";
import { ref, get, set, remove } from "firebase/database";

export const fetchFavorites = createAsyncThunk(
  "favorite/fetchFavorites",
  async (userId) => {
    const favoritesRef = ref(db, `users/${userId}/favorites`);
    const snapshot = await get(favoritesRef);
    if (snapshot.exists()) {
      return Object.keys(snapshot.val());
    }
    return [];
  }
);

export const addFavoriteToDB = createAsyncThunk(
  "favorite/addFavoriteToDB",
  async ({ userId, teacherId }) => {
    const favoriteRef = ref(db, `users/${userId}/favorites/${teacherId}`);
    await set(favoriteRef, true);
    return teacherId;
  }
);

export const removeFavoriteFromDB = createAsyncThunk(
  "favorite/removeFavoriteFromDB",
  async ({ userId, teacherId }) => {
    const favoriteRef = ref(db, `users/${userId}/favorites/${teacherId}`);
    await remove(favoriteRef);
    return teacherId;
  }
);

export const clearFavorites = () => ({
  type: "favorite/clearFavorites",
});
