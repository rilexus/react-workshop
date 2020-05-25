import React, {useState} from 'react';

// export const InputHandler = ({defaultValue, renderProp}) => {
//   const [value, setValue] = useState(() => defaultValue);
//
//   const handleChange = (e) => {
//     const {value} = e.target;
//     setValue(value)
//   }
//
//   return renderProp(value, handleChange)
// };

export const InputHandler = ({defaultValue, children}) => {
  const [value, setValue] = useState(() => defaultValue);

  const handleChange = (e) => {
    const {value} = e.target;
    setValue(value)
  }

  return children(value, handleChange)
};

export const Solution = () => {
  return (
    <InputHandler defaultValue={'default value'}>
      {(value, handleChange) => <input type="text" value={value} onChange={handleChange}/>}
    </InputHandler>
  )
}

