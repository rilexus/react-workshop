import React, {useEffect, useRef} from 'react';

// Exercise: create a custom useConstant hook, which holds a constant value during the lifetime of a component.

const UseRef = () => {
  const numberRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    numberRef.current = 3; // any value: string, object, array ...
  }, [])

  console.log("numberRef: ", numberRef)

  return (
    <div>
      <input ref={inputRef} type="text"/>
    </div>
  );
};

export default UseRef;