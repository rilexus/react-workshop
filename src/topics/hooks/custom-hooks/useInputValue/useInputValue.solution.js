import { useState } from 'react';

function useInputValue(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const handleEvent = (event) => {
    const {value} = event.target
    setValue(value)
  }
  return [value, handleEvent];
}