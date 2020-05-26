import React, {useReducer} from 'react';


// Exercise: handle different actions in the reducer.
const reducer = (state, action) => {
  const { type } = action
  return state
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {value: '', focused: false, blurred: false})

  return <input
    onChange={(event) => dispatch({type: 'ON_CHANGE', payload: {value: event.target.value}})}
    onFocus={() => dispatch({type: 'ON_FOCUS'})}
    onBlur={() => dispatch({type: 'ON_BLUR'})}
  />;
};

export default UseReducer;