import React from 'react';
import './App.css';
import StateChange from "./topics/re-render/StateChange";
import PropsChange from "./topics/re-render/PropsChange";
import Redux from "./topics/redux/components/Redux";

function App() {
  return (
    <div className="App">
      <Redux/>
    </div>
  );
}

export default App;
