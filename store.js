import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import logger from 'redux-logger';

import userReducer from './store/reducers/userReducer';
import shopsReducer from './store/reducers/shopsReducer';
import filesReducer from './store/reducers/filesReducer';

const initialState = {
  user: {},
  shops: {},
  files: [],
  // products: {},
  // currentShop: {},
  // currentProduct: {}
}


const allReducers = Object.assign({}, { user: userReducer }, { shops: shopsReducer }, { files: filesReducer });
export const reducer = combineReducers(allReducers);

const makeConfiguredStore = (reducer) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware, logger));
}

const mainReducer = (state = initialState, action) => action.type === HYDRATE ? action.payload : reducer(state, action);

const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore(mainReducer);
  } else {
    const { persistStore, persistCombineReducers, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'nextjs',
      storage,
      version: 6
    };

    // const combinedReducer = persistCombineReducers(persistConfig, mainReducer);
    const persistedReducer = persistReducer(persistConfig, mainReducer);
    const store = makeConfiguredStore(persistedReducer);
    store.__persistor = persistStore(store);
    return store;
  }
};

export const wrapper = createWrapper(makeStore);