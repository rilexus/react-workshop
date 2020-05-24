import React from 'react';
import './product.scss'

const Product = ({title, subtitle, description, price, variant, color, size, available}) => {
  return (
    <div className={'product'}>
      <div className={'product__title'}>{title}</div>
      <div className={'product__subtitle'}>{subtitle}</div>
      <div className={'product__description'}>{description}</div>
      <div className={'product__price'}>{price}</div>
      <div className={'product__color product__color--red'}>{color}</div>
      <div className={'product__size'}>{size}</div>
    </div>
  );
};

export default Product;