import {React} from "./React";
import {ReactDOM} from "./React";


const A = ({s}) => {
  return <div>
    1
    <div>
      2
      <div>3</div>
      <button>click</button>
    </div>
  </div>
}

// const A = ({s}) => {
//   return React.createElement(
//     "div",
//     null,
//     "1",
//     React.createElement("div", null, "2",
//       React.createElement("div", null, "3"),
//       React.createElement("button", null, "click")));
// };
//
// React.createElement(A, null);


const root = document.getElementById('root');
ReactDOM.render(<A s={2}/>, root)


