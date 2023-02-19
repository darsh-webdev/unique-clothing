// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import createSagaMiddleware from "@redux-saga/core";

// import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
