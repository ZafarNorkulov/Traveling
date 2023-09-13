import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const commonPersistConfig = {
  key: "common",
  storage: storage,
  whitelist: ["branchId"],
};

const rootReducer = combineReducers({
  auth: persistReducer(commonPersistConfig, authSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export let persistor = persistStore(store);
