import React from 'react';
import './product.scss'

const getPriceClass = (price) => {
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

const AnotherNestedComponent = ({price, className}) => {
  return (
    <div>
      <div className={`someClasses ${className}`}>
        {price}
      </div>
    </div>
  )
}

const ProductNestedComponent = ({price, className}) => {
  return (
    <div>
      <div>
        <AnotherNestedComponent price={price} className={className}/>
      </div>
    </div>
  )
}

const Product = ({title, subtitle, description, price, variant, color, size, available}) => {
  console.log(price)

  return (
    <div className={`product product--${available ? 'available' : 'unavailable'}`}>
      <div className={'product__title'}>{title}</div>
      <div className={'product__subtitle'}>{subtitle}</div>
      <div className={'product__description'}>{description}</div>
      <div>
        <ProductNestedComponent price={price} className={`product__price product__price${getPriceClass()}`}/>
      </div>
      <div className={`product__color product__color--${color}`}>{color}</div>
      <div className={'product__size'}>{size}</div>
    </div>
  );
};

export default Product;