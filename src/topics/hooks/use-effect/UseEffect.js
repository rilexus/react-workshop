import React, {useEffect, useState} from 'react'

const UseEffect = () => {

  useEffect(() => {
    console.log('mount')

    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div style={{
      height: '200vh'
    }}>
      UseEffect hook
    </div>
  );
};

export default UseEffect;