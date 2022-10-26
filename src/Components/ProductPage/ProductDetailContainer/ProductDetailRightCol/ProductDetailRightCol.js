import React, { useState } from "react";
import ProductDetailRightColCSS from "./ProductDetailRightCol.module.css";
import { BsCart3 } from "react-icons/bs";
function ProductDetailRightCol() {
  const styled = ProductDetailRightColCSS;
  const [amount, setAmount] = useState(0);

  const addHandler = () => {
    
  };
  const amountHandler = (e) => {
    if (e.target.textContent === "+") {
      setAmount(amount + 1);
    } else if (amount !== 0 && e.target.textContent === "-") {
      setAmount(amount - 1);
    }
  };
  return (
    <div className={styled.rightCol}>
      <p className={styled.companyName}>Sneaker Company</p>
      <h2 className={styled.productHeader}>Fall Limited Edition Sneakers</h2>
      <p className={styled.productInfo}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styled.priceBox}>
        <div className={styled.priceBox__price}>
          <p className={styled.updatedPrice}>$125.00</p>
          <p className={styled.oldPrice}>$250.00</p>
        </div>
        <span className={styled.priceBox__badge}>50%</span>
      </div>
      <div className={styled.footerButtons}>
        <div className={styled.amountButton}>
          <span onClick={amountHandler} className={styled.minusButton}>
            -
          </span>
          <span className={styled.amount}>{amount}</span>
          <span onClick={amountHandler} className={styled.plusButton}>
            +
          </span>
        </div>
        <div className={styled.addButton}>
          <button onClick={addHandler} className={styled.addButton__button}>
            <BsCart3 className={styled.cartIcon} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailRightCol;
