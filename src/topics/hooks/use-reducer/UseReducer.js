import React, {useReducer} from 'react';

const reducer = (state, action) => {
  const { type } = action
  // calculate new state based on the action
  return state
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 'initValue')

  return <button onClick={() => dispatch({type: 'ACTION', /* other properties */})}>click</button>;
};

export default UseReducer;