import React, {createContext, useState} from 'react';

const SomeComponent = (props) => {
  console.log('SomeComponent: ', props)
  return <div>SomeComponent</div>
}


const BasicContext = createContext({});

export const BasicContextProviderComponent = ({children}) => {
  const [state, setState] = useState({value: true})

  const contextValue = [state, setState]

  return <BasicContext.Provider value={contextValue}>
    {children}
  </BasicContext.Provider>
};

export const BasicContextComponent = () => {
  return (
    <BasicContextProviderComponent>

      <BasicContext.Consumer>
        {(contextValue) => {
          console.log('BasicContextComponent: ', contextValue)
          return <SomeComponent value={contextValue[0]} onChange={contextValue[1]}/>
        }}
      </BasicContext.Consumer>

    </BasicContextProviderComponent>
  )
};