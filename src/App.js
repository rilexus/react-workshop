import React from 'react';
import './App.scss';
// import Product from "./topics/SCSS/BEM/Product";
import Product from "./topics/SCSS/conditional-classes/Product";
import product from './topics/SCSS/BEM/product.json'

function App() {
  console.log('App runs.')

  return (
    <div className="App">
      <Product {...product}/>
    </div>

  );
}

export default App;
