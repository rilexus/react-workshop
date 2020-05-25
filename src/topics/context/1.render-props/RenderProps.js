import React from 'react';

/*
  function someFunction(callback) {
    return callback()
  }
  console.log(someFunction(() => 1))
*/


const RenderProps = ({children}) => {
  // provide args to the children
  return children()
};

export const RendererBasic = () => {
  return (
    <RenderProps>
      {() => {
        return <div>simple div</div>
      }}
    </RenderProps>
  )
}


// After BABEL transformation:

// const RenderProps = ({children}) => {
//   // provide args to the children
//   return children();
// };
//
// export const RendererBasic = () => {
//   return React.createElement(
//     RenderProps,
//     null,
//     () => {
//       return React.createElement("div", null, "simple div");
//     }
//   );
// };
//
// React.createElement(RendererBasic, null);

// Exercise 1: Create a render prop component which handles input onChange event and provides a value
// Exercise 2: Create a render prop component which fetches users and returns an array
