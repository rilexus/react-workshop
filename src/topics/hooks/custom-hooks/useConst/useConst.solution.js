import React from 'react';

export function useConst(value){
  const ref = React.useRef();

  if (!ref.current) {
    ref.current = value;
  }

  return ref.current;
}