import React, {useEffect, useRef} from 'react';

// Exercise: create a custom useConstant hook, which holds a constant value during the lifetime of a component.

const UseRef = () => {
  const ref = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    ref.current = 3; // any value: string, object, array ...
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text"/>
    </div>
  );
};

export default UseRef;