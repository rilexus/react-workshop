import React, {useEffect, useState} from 'react'


// Exercise: create a custom useScrollPosition hook in the `UseScrollPosition.js`

const UseEffect = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handle = (e) => {
      const pos  = e.target.documentElement.scrollTop
      setScrollTop(pos)
    }

    console.log('mount')
    document.addEventListener('scroll', handle)

    return () => {
      console.log('unmount')
      document.removeEventListener('scroll', handle)
    }
  }, [])

  useEffect(() => {
    console.log(`scrollTop: ${scrollTop}`)
  }, [scrollTop])

  return (
    <div style={{
      height: '200vh'
    }}>
      UseEffect hook
    </div>
  );
};

export default UseEffect;