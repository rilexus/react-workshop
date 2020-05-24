import React, {useState} from 'react';
import useAddTwo from "./useAddTwo";

// Exercise 1: make use of the useAddTwo hook
// Exercise 2: use the useAddTwo hook to create a useMinusTwo hook

const UseState = () => {
  // const [number, setNumber] = useAddTwo(1)
  const [state1, setState1] = useState(0)

  const handleChange = (e) => {
    const {value} = e.target
    setState1(value)
  }

  return (
    <div>
      <input type="number" onChange={handleChange} value={state1}/>
    </div>
  );
};

export default UseState;