import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const states = []
// let calls = -1
//
// function useState(defaultValue) {
//   const callId  = ++calls
//
//   if (states[callId]){
//     return states[callId]
//   }
//
//   const setValue = (val) => {
//     states[callId][0] = val
//     reRender()
//   }
//
//   states[callId] = [defaultValue, setValue]
//   return states[callId]
// }
//
// const MyApp = () => {
//   const [counter1, setCounter1] = useState(1)
//   const [counter2, setCounter2] = useState(1)
//   console.log(states)
//   return <div>
//     <div>
//       <h2>counter1</h2>
//       <h1>
//         {counter1}
//       </h1>
//       <button onClick={() => setCounter1(counter1+1)}>counter1</button>
//     </div>
//     <div>
//       <h2>counter2</h2>
//       <h1>
//         {counter2}
//       </h1>
//       <button onClick={() => setCounter2(counter2+1)}>counter2</button>
//     </div>
//   </div>
// }

// reRender()

// function reRender() {
//   calls = -1
//   ReactDOM.render(
//     <React.StrictMode>
//       <MyApp />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
