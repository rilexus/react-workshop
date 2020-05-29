import React from 'react';
import ProductTitle from "./components/ProductTitle";
import ProductSubtitle from "./components/ProductSubtitle";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "./components/ProductPrice";
import ProductColor from "./components/ProductColor";
import ProductSize from "./product-size/ProductSize";

const ProductWrapper = ({children, available}) => {
  return <div className={`product product--${available ? 'available' : 'unavailable'}`}>
    {children}
  </div>
}

const Product = ({title, subtitle, description, price, variant, color, size, available}) => {
  return (
    <div>
      <ProductWrapper available={available}>
        <ProductTitle>{title}</ProductTitle>
        <ProductSubtitle>{subtitle}</ProductSubtitle>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>{price}</ProductPrice>
        <ProductColor color={color}>{color}</ProductColor>
        <ProductSize>{size}</ProductSize>
      </ProductWrapper>
    </div>
  );
};

export default Product;