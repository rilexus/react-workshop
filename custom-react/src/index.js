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

const root = document.getElementById('root');
ReactDOM.render(<A s={2}/>, root)


