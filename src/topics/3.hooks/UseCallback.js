import React, {useCallback, useMemo} from 'react';

const UseCallback = () => {
  const callback = useCallback((args) => {
    console.log(args)
  }, [/* deps with appear in the callback */])

  const callback1 = useMemo(() => {
    return () => {} // as useCallback
  }, [/* deps with appear in the callback */])
  return (
    <div>

    </div>
  );
};

export default UseCallback;