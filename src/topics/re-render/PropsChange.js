import React, {useState} from 'react';

const ChildPropsChange = () => {
  const uuid = Math.random() * 100
  console.log(`ChildPropsChange render: ${uuid}`)
  return (
    <h3>
      s
    </h3>
  );
};

const PropsChange = () => {
  const [s, setS] = useState(false)

  return (
    <div>
      <ChildPropsChange />
      <button onClick={() => setS(!s)}>Toggle</button>
      <div>some</div>
    </div>
  );
};

export default PropsChange;

