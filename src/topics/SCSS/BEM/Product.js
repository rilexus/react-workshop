import React from 'react';

const Product = ({title, subtitle, description, price, variant, color, size, available}) => {
  return (
    <div className={'product'}>
      <div className={'title title--first title--red product__title'}>{title}</div>
      <div className={'product__subtitle'}>{subtitle}</div>
      <div className={'product__description'}>{description}</div>
      <div className={'product__price'}>{price}</div>
      <div className={'product__color product__color--red'}>{color}</div>
      <div className={'product__size'}>{size}</div>
    </div>
  );
};

export default Product;