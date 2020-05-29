import React from 'react';
import Title from "./title/Title";

const TITLE_TYPES = {
  first: 'first'
}

const ProductTitle = ({children}) => {
  return <Title className={'product__title'} isRed type={TITLE_TYPES.first}>{children}</Title>
};

export default ProductTitle;