import React from 'react';
import {connect} from "../store/connect";

const _Some = ({greeting, stateCount, greet}) => {
  const handleClick = () => {
    greet('Hallo', stateCount + 1)
  }
  return (
    <div>
      <div>
        in state greeting: {greeting}
      </div>
      <div>
        in state count: {stateCount}
      </div>
      <button onClick={handleClick}>dispatch</button>
    </div>
  );
};

const mapProps = (state) => {
  return {
    greeting: state.greeting,
    stateCount: state.count
  }
}

const mapDispatch = (dispatch) => {
  return {
    greet: (word, count) => dispatch({type: 'ACTION-TYPE', payload: {word, count}}),
  }
}

export const Some = connect(mapProps, mapDispatch)(_Some)
