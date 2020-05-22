import React from 'react';
import {StoreProvider} from "../store/provider/StoreProvider";
import { Some } from "./Some";
import {createStore} from "../store/createStore";
import {
  loggerMiddleware,
  middleware1,
  middleware2,
  middleware3,
  promiseMiddleware,
  thunkMiddleware
} from "../middlewares";

const initState = {
  greeting: "init",
  count: 0
}

const reducer = (state = initState, action) => {
  const { type } = action
  switch (type) {
    case 'ACTION-TYPE': {
      const {word, count} = action.payload
      return {
        ...state,
        count: count,
        greeting: word
      }
    }
    default: {
      return state
    }
  }

}

const store = createStore(
  reducer,
  undefined,
  [
    thunkMiddleware,
    promiseMiddleware,
    loggerMiddleware,
    middleware1,
    middleware2,
    middleware3
  ]
)

const Redux = () => {
  return (
    <div>
      <StoreProvider store={store}>
        <Some/>
      </StoreProvider>
    </div>
  );
};
export default Redux;