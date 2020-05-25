function pipe(...fns){
  return (arg) => {
    fns.forEach((f) => {
      arg = f(arg)
    });
    return arg;
  }
}
function compose(...fns) {
  return pipe(...fns.reverse())
}


export function createStore(reducer, initState, middlewares = []) {
  let state = initState
  let subscribers = []

  function subscribe(callback) {
    subscribers.push(callback)
    callback(state)
  }

  function unsubscribe(callback) {
    subscribers = subscribers.filter((subscriber) => callback !== subscriber)
  }

  const enrichedMiddleware = middlewares.map((ware) => ware({getState, dispatch})) // enrich every middleware with the getState and dispatch function
  const middleWithState = [...enrichedMiddleware]
  const composedMiddleware = compose(...middleWithState)

  function dispatch(action){
    const middlewareAction = composedMiddleware((_action) => _action )(action)

    state = reducer(state, middlewareAction)

    subscribers.forEach((subscriber) => {
      subscriber(state)
    })

  }

  function getState() {
    return state
  }

  state = reducer(undefined, {type: 'CREATE_STORE_INIT_ACTION'})

  return {dispatch, getState, subscribe, unsubscribe}
}
