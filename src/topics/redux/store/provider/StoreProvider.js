import React, {createContext, useContext, useEffect, useState} from 'react';

const Context = createContext(null)

export const useStoreContext = () => {
  const {state, dispatch} = useContext(Context)
  return [state, dispatch]
}

export const StoreProvider = ({store, children}) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const handleStateUpdate = (newState) => {
      setState((p) => !p)
    }
    store.subscribe(handleStateUpdate)
    return () => {
      store.unsubscribe(handleStateUpdate)
    }

  },[]);
  return (
    <Context.Provider value={{
      state: store.getState(),
      dispatch: store.dispatch
    }}>
      {children}
    </Context.Provider>
  );
};