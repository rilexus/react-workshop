import React from 'react';

const ProductDescription = ({children}) => {
  return (
    <div className={'product__description'}>{children}</div>
  );
};

export default ProductDescription;