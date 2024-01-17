import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import rootReducer from "./store";
// persist configuration object
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// create a persisted reducer using the rootReducer and persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// create a persistor object to persist the store
const persistor = persistStore(store);

export { store, persistor };
