import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Сериализуемые данные пользователя
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
        emailVerified: action.payload.emailVerified,
        photoURL: action.payload.photoURL,
      };
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export const authReducer = authSlice.reducer;
