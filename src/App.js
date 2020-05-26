import React from 'react';
import './App.scss';
import UseReducer from "./topics/hooks/use-reducer/UseReducer.exercise";
import {HookedContextComponent} from "./topics/context/hooked-context/HookedContext";

function App() {
  console.log('App runs.')

  return (
    <div className="App">
      <HookedContextComponent/>
    </div>

  );
}

export default App;
