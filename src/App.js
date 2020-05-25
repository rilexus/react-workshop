import React from 'react';
import './App.scss';
// import Product from "./topics/SCSS/BEM/Product";
import Product from "./topics/SCSS/refactored-bem/Product";
import product from './topics/SCSS/BEM/product.json'
import {BasicContextComponent} from "./topics/context/Basic";
import {UsersList} from "./topics/context/1.render-props/fetch-user-list/FetchUserList.solution";
import Exec from "./topics/2.execution/Exec";

function App() {
  console.log('App runs.')

  return (
    <div className="App">
      <Exec/>
    </div>

  );
}

export default App;
