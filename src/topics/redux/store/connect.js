import React from "react"
import {useStoreContext} from "./provider/StoreProvider"


export function connect(mapProps, mapDispatch) {
  return (Component) => {
    return (props) => {
      const [state, dispatch] = useStoreContext()
      return <Component {...props} {...mapDispatch(dispatch)} {...mapProps(state)}/>
    }
  }
}