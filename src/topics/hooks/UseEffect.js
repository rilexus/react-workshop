import React, {useEffect} from 'react';

const UseEffect = () => {

  useEffect(() => {
    const handle = () => {}

    console.log('mount')
    window.addEventListener('scroll', handle)

    return () => {
      console.log('unmount')
      window.removeEventListener('scroll', handle)
    }
  }, [])


  return (
    <div>
      UseState
    </div>
  );
};

export default UseEffect;