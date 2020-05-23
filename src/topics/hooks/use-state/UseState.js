import React, {useEffect, useState} from 'react';
import useAddTwo from "./useAddTwo";

const UseState = () => {
  const [number, setNumber] = useAddTwo(0)
  const [state1, setState1] = useState('initValue')
  const [state2, setState2] = useState(() => {
    // expensive computations here
    return 'initValue'
  })

  useEffect(() => {
    setState1('value')
  }, [])

  useEffect(() => {
    setState2((prevState/* initValue */) => {
      return 'value'
    })
  }, [])


  return (
    <div>
      UseState
    </div>
  );
};

export default UseState;