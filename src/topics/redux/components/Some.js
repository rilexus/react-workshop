import React, {useEffect} from 'react';
import {connect} from "../store/connect";

const _Some = ({greeting, stateCount, greet, dispatch, dispatchPromise, dispatchFunction}) => {
  // dispatch({type: 'ACTION_TYPE"})
  return (
    <div>
      <div>
        in state greeting: {greeting}
      </div>
      <div>
        in state count: {stateCount}
      </div>
      <div>
        <button onClick={() => greet('Hallo', stateCount + 1)}>dispatch</button>
      </div>
      <div>
        <button onClick={() => dispatchPromise()}>dispatch Promise</button>
      </div>
      <div>
        <button onClick={() => dispatchFunction()}>dispatch Function</button>
      </div>

    </div>
  );
};

function fetchUser(withId){
  return ({dispatch}) => {
    dispatch({type: 'FETCHING_USERS'})
  }
}


const mapProps = (state) => {
  return {
    greeting: state.greeting,
    stateCount: state.count
  }
}

const ACTION_TYPE = 'SOME_ACTION'
function actionCreator(data) {
  return {
    type: ACTION_TYPE,
    payload: {data}
  }
}
function doSomeStuff(data, dispatch) {
  // do stuff here
  dispatch(actionCreator(data))
  // and do stuff here
}

const mapDispatch = (dispatch) => {
  return {
    dispatch: dispatch,
    dispatchFunction: () => dispatch(fetchUser('id')),
    dispatchPromise: () => dispatch(new Promise((res) => {
      setTimeout(res, 2000)
    })),
    greet: (word, count) => dispatch({type: 'ACTION-TYPE', payload: {word, count}}),
    some: (data) => doSomeStuff(data, dispatch),
  }
}

export const Some = connect(mapProps, mapDispatch)(_Some)
