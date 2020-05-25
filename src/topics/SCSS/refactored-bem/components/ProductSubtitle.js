import React from 'react';

const ProductSubtitleStyle = ({children}) => <div className={'product__subtitle'}>{children}</div>

const ProductSubtitle = ({children}) => {
  return (
    <ProductSubtitleStyle>{children}</ProductSubtitleStyle>
  );
};

export default ProductSubtitle;