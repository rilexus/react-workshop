import React, {useState} from 'react';

const C = ({name}) => {
  return (
    <div>
      {name}
    </div>
  );
};

const B = ({name}) => {
  return (
    <div>
      <C name={name}/>
    </div>
  );
};

const A = ({name}) => {
  return (
    <div>
      <B name={name}/>
    </div>
  );
};


const Drilling = () => {
  const [name, setName] = useState("Stan");

  return (
    <div>
      <A name={name}/>
    </div>
  );
};

export default Drilling;