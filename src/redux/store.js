import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { teacherReducer } from "./teachers/slice.js";
import { favoritesReducer } from "./favorites/slice.js";
import { authReducer } from "./auth/slice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["teachers"],
};

const rootReducer = combineReducers({
  teachers: teacherReducer,
  favorite: favoritesReducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
