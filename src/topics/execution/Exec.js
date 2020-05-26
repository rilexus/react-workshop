import React from 'react';

const C = () => {
  console.log('C runs.')
  return (
    <div>
      C
    </div>
  );
};
const B = () => {
  console.log('B runs.')
  return (
    <div>
      B
      <C/>
    </div>
  );
};
const A = () => {
  console.log('A runs.')
  return (
    <div>
      A
      <B/>
    </div>
  );
};

const createUseState = () => {
  let value

  return (initValue) => {
    value = initValue
    const setValue = (val) => {
      value = val
    }
    return [value, setValue]
  }

}
const useState = createUseState()

// const useState = (initValue) => {
//   let value = initValue
//   const setValue = (val) => {
//     value = val
//   }
//   return [value, setValue]
// }

const Exec = () => {
  console.log('Exec runs.')

  const [val, setVal] = useState(2)
  console.log('State in "Exec": ', val)

  setVal(4)

  return (
    <div>
      Exec
      {val}
      <A/>
    </div>
  );
};

export default Exec;