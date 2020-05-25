import React, {useMemo} from 'react';
import {H1} from "../h1/H1";

const Title = ({children, isRed, type, className}) => {

  const titleFirstModifierClass = type === 'first'? 'title--first' : '';
  const isRedModifierClass= isRed ? 'title--red' : '';

  const titleModifiers = useMemo(() => [titleFirstModifierClass, isRedModifierClass].join(' '), [titleFirstModifierClass, isRedModifierClass]) ;

  return <H1 className={`title ${titleModifiers} ${className}`}>{children}</H1>
};

export default Title;