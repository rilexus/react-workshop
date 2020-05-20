import React, {useState} from 'react';

const StateChange = () => {
  const [s, setS] = useState(false);

  const handle = () => {
    setS(p => !p)
  }

  return (
    <div>
      <h3>{`${s}`}</h3>
      <button onClick={handle}>Toggle</button>
    </div>
  );
};

export default StateChange;