import React, {useEffect, useRef} from 'react';

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