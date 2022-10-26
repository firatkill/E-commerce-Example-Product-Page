import React from "react";
import ProductDetailCSS from "./ProductDetailContainer.module.css";
import ProductDetailRightCol from "./ProductDetailRightCol/ProductDetailRightCol";
import ProductDetailLeftCol from "./ProductDetailLeftCol/ProductDetailLeftCol";

function ProductDetailContainer() {
  const styled = ProductDetailCSS;
  return (
    <div className={styled.ProductDetailContainer}>
      <div className={styled.row}>
        <ProductDetailLeftCol className={styled.leftCol} />
        <ProductDetailRightCol className={styled.rightCol} />
      </div>
    </div>
  );
}

export default ProductDetailContainer;
