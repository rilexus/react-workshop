import React, {useMemo} from 'react';

const UseMemo = ({bigUnsortedArray}) => {

  const value = useMemo(() => {}, [/* run once */])

  const value2 = useMemo(() => {
    return bigUnsortedArray.sort((first, second) => first < second )
  }, [bigUnsortedArray])


  return (
    <div>
      {value2.toString()}
    </div>
  );
};

export default UseMemo;