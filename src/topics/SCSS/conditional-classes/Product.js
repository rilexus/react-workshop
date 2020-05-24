import React from 'react';
import './product.scss'

const Product = ({title, subtitle, description, price, variant, color, size, available}) => {
  console.log(price)

  const getPriceClass = () => {
    if (price === 100) {
      return '--cheap'
    }
    if (price < 100) {
      return '--super-cheap'
    }
    if (price >= 0 && price <= 10) {
      return '--basically-for-free'
    }
    /*
    * other classes go here (ノ-_-)ノ~┻━┻
    */
    return '--super-mega-cheap'
  }

  return (
    <div className={`product product--${available ? 'available' : 'unavailable'}`}>
      <div className={'product__title'}>{title}</div>
      <div className={'product__subtitle'}>{subtitle}</div>
      <div className={'product__description'}>{description}</div>
      <div className={`product__price product__price${getPriceClass()}`}>{price}</div>
      <div className={`product__color product__color--${color}`}>{color}</div>
      <div className={'product__size'}>{size}</div>
    </div>
  );
};

export default Product;