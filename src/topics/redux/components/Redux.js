import React from 'react';
import {StoreProvider} from "../store/provider/StoreProvider";
import { Some } from "./Some";
import {createStore} from "../store/createStore";

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

const middleware1 = ({dispatch}) => next => action => {
  console.log("middleware1, ", action)
  return next(action)
}

const middleware2 = (store) => {
  return next => {
    return action => {
      console.log("middleware2, ", action)
      return next(action)
    }
  }
}
const middleware3 = ({dispatch}) => {
  return next => {
    return action => {
      const {type} = action
      console.log("middleware3, ", action)
      return next(action)
    }
  }
}

const store = createStore(reducer, undefined, [middleware1, middleware2, middleware3])

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