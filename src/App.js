import React from 'react';
import './App.css';
import Redux from "./topics/redux/components/Redux";
import {WithFetchUserComponent} from "./topics/HOC/HOC";

function App() {
  return (
    <div className="App">
      <Redux/>
      <div>
        <WithFetchUserComponent/>
      </div>
    </div>

  );
}

export default App;
