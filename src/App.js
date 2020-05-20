import React from 'react';
import './App.css';
import StateChange from "./topics/re-render/StateChange";
import PropsChange from "./topics/re-render/PropsChange";

function App() {
  return (
    <div className="App">
      {/*<StateChange/>*/}
      <PropsChange/>
    </div>
  );
}

const A = () => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, "2", /*#__PURE__*/React.createElement("div", null, "3"));
};



/*#__PURE__*/
console.log(React.createElement(A, null));

export default App;
