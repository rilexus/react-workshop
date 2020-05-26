import { useState } from 'react';

// Exercise: write a hook which indicates, if a key is being pressed by the user.
function useKeyPress(key) {
  const [keyPressed, setKeyPressed] = useState(false)
  return keyPressed;
}