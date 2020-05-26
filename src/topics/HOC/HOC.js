import React, {useEffect, useState} from "react";


const Component = (props) => <div>Component</div>

const getComponent = () => {
  return () => <div>Component</div>
}

const getComponent2 = (args) => {
  return (props) => <div {...props} {...args}>Component</div>
}


const getComponent3 = () => {
  const func = (event) => {
    // handle event
  }
  return (props) => <div {...props} onClick={func}>Component</div>
}

const getComponent4 = (Component) => {
  return (props) => <Component/>
}

const getComponent5 = (Component) => {
  return (props) => <Component {...props}/>
}

const getComponent6 = (Component) => {
  const func = (event) => {
    // handle event
  }
  return (props) => <Component {...props} onClick={func}/>
}
