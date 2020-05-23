import React, {useState} from 'react';
import './App.css';
import Redux from "./topics/redux/components/Redux";
import {WithFetchUserComponent} from "./topics/HOC/HOC";
import Exec from "./topics/2.execution/Exec";

function App() {
  const [s, set] = useState(false);
  console.log('App runs.')
  return (
    <div className="App">
    </div>

  );
}

export default App;
