import { useState } from 'react';

// Exercise: write a hook which handles inputs value
function useInputValue(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  return [value, () => {}];
}