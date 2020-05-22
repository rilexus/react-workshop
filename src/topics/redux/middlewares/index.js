const sleep = time => new Promise((res) => setTimeout(res, time))
const noop = () => {};

async function _fetch(){
  await sleep(100)
  return {
    fetch: 'works'
  }
}

async function callToApi(arg1, dispatch) {
  dispatch({type: 'FETCHING_STARTED'})
  try {
    const res = await _fetch('url', arg1)
    dispatch({type: 'FETCHING_FINISHED', payload: {...res}})
  } catch (e) {
    dispatch({type: 'FETCHING_ERRORED', payload: {error: e}})
    return e
  }
}

function createGetPosts(numberOfPosts) {
  return async (dispatch) => {
    dispatch({type: 'FETCHING_POSTS_STARTED'})
    try {
      await sleep(3000)
      const res = await _fetch('url', numberOfPosts)
      dispatch({type: 'FETCHING_POSTS_FINISHED', payload: {...res}})
    } catch (e) {
      dispatch({type: 'FETCHING_POSTS_ERRORED', payload: {error: e}})
      return e
    }
  }
}

const fetchPosts20 = createGetPosts(20)

export const loggerMiddleware = () => next => action => {
  console.log('[LOGGER] action: ', action)
  return next(action)
}
export const promiseMiddleware = ({dispatch}) => next => action => {
  if (typeof action === "object" && action.then){
    action.then((data) => {
      dispatch({type: 'PROMISE_RESOLVED', payload: {data}})
    }).catch((error) => {
      dispatch({type: 'PROMISE_ERRORED', payload: {error}})
    })
    return next({type: 'PROMISE_INTERCEPTED', payload: {promise: action}})
  } else {
    return next(action)
  }
}

export const thunkMiddleware = ({getState, dispatch}) => next => action => {
  if (typeof action === "function") {
    action({state: getState(), dispatch: dispatch})
    return next({type: ''})
  }
  return next(action)
}





export const middleware1 = ({dispatch}) => next => action => {
  const {type} = action
  if (type === 'ACTION-TYPE'){
    fetchPosts20(dispatch)
    callToApi( 'args', dispatch).then(noop)
  }
  return next(action)
}

export const middleware2 = (store) => {
  return next => {
    return action => {
      return next(action)
    }
  }
}
export const middleware3 = ({dispatch}) => {
  return next => {
    return action => {
      const {type} = action
      return next(action)
    }
  }
}