import {useState} from 'react';

const useAddTwo = (init) => {
  const [number, setNumber] = useState(init)

  const set = (num) => { // useCallback here
    setNumber(num + 2)
  }

  return [number, set]
};

export default useAddTwo;