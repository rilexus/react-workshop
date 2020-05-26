import {useEffect, useState} from "react";

export function useScrollPosition() {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handle = (e) => {
      const pos  = e.target.documentElement.scrollTop
      setScrollTop(pos)
    }
    document.addEventListener('scroll', handle)

    return () => {
      document.removeEventListener('scroll', handle)
    }
  }, [])

  return scrollTop
}