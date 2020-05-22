import React, {createContext, useContext, useEffect, useState} from 'react';

const Context = createContext(null)

export const useStoreContext = () => {
  const {state, dispatch} = useContext(Context)
  return [state, dispatch]
}

export const StoreProvider = ({store, children}) => {
  const [_, setState] = useState(false)

  useEffect(() => {
    const reRender = () => setState((prevState) => !prevState)

    store.subscribe(reRender)
    return () => {
      store.unsubscribe(reRender)
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