import React from 'react';

const ProductColorWrapper = ({color, children}) => {
  return <div className={`product__color product__color--${color}`}>{children}</div>
}

const ProductColor = ({color, children}) => {
  return (
      <ProductColorWrapper color={color}>
        {children}
      </ProductColorWrapper>
  );
};

export default ProductColor;