import {useState} from 'react';

const useAddTwo = (init) => {
  const [number, setNumber] = useState(init)

  const set = (num) => { // useCallback here
    let n = num
    if (n === ''){
      setNumber(0)
      return
    }
    if (typeof n === "string"){
      n = parseInt(n)
    }

    setNumber(n + 2)
  }

  return [number, set]
};

export default useAddTwo;