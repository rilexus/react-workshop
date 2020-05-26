import React, {createContext, useContext, useState} from 'react';

const Context = createContext({})

function useHookedContext() {
  const context = useContext(Context)
  return context
}

const HookedContextProvider = ({children}) => {
  const [state, setState] = useState({value: 'value'})
  return (
    <Context.Provider value={[state, setState]}>
      {children}
    </Context.Provider>
  );
};


const SomeComponent = () => {
  const context = useHookedContext()
  console.log('SomeComponent: ', context)
  return (
    <div>SomeComponent</div>
  )
}

const OtherComponent = (props) => {
  return (
    <div>
      <SomeComponent/>
    </div>
  )
}

export const HookedContextComponent = () => {
  return (
    <HookedContextProvider>
      <div>
        <div>
          <div>
            <OtherComponent/>
          </div>
        </div>
      </div>
    </HookedContextProvider>
  )
}

