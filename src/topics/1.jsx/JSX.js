import React from 'react';
/*
 go to: https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgfAEgpgGwQewAQHdkCcEmAenGgG4g&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=react&prettier=true&targets=&version=7.9.6&externalPlugins=
 */

// Copy & Past the following component
/*

  function A({p}){
    return (
      <div>
        Hallo World
      </div>
    )
  }
  <A/>


 */
// what do you see?
/*

function A({p}) {
  return React.createElement("div", null, "Hallo World");
}

React.createElement(A, null);

 */



// Change the component name to lower case. What do you see?

// Copy the result from the browser, past it in to the IDE and console.log(React.createElement(...))
// What do you see?


// Copy & Past the following component
// what do you see?
/*
function A({p}){
  return (
    <div>
      {() => {}}
    </div>
  )
}
<A/>
 */

// Copy & Past the following component
// what do you see?
/*
function A({p}){
  return (
    <div>
      {() => <div>some</div>}
    </div>
  )
}
<A/>
 */

/*

function B(){
  return (
    <div>
      B
    </div>
  )
}

function A({p}){
  return (
    <div>
      <B p={1}/>
      <B p={2}/>
      <B p={3}/>
    </div>
  )
}
<A/>

 */


/*

function B({p}) {
  return React.createElement("div", null, "B");
}

function A({p}) {
  return React.createElement(
  "div",
  null,
  React.createElement(B, {p: 1}),
  React.createElement(B, {p: 2}),
  React.createElement(B, {p: 3}));
}
React.createElement(A, null);
 */

function SimpleDiv({p}) {
  return React.createElement("div", null, "Hallo World");
}

React.createElement(SimpleDiv, null);