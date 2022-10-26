import React from "react";
import ProductDetailLeftColCSS from "./ProductDetailLeftCol.module.css";
import { useSelector, useDispatch } from "react-redux";
import { imgActions } from "../../../../redux/img-slice";
function ProductDetailLeftCol() {
  const styled = ProductDetailLeftColCSS;
  const dispatch = useDispatch();
  const currentImg = useSelector((state) => state.img.currentImg);

  const clickHandler = (e) => {
    dispatch(
      imgActions.assignCurrentImg(
        `image-product-${
          e.currentTarget.alt[e.currentTarget.alt.length - 1]
        }.jpg`
      )
    );
  };
  return (
    <div className={styled.leftCol}>
      <div className={styled.productImg}>
        <img alt="product" src={currentImg} />
      </div>
      <div className={styled.imgThumbs}>
        <img
          className={currentImg === "image-product-1.jpg" && styled.activeImg}
          onClick={clickHandler}
          alt="thumbnail1"
          src="/image-product-1-thumbnail.jpg"
        />
        <img
          className={currentImg === "image-product-2.jpg" && styled.activeImg}
          onClick={clickHandler}
          alt="thumbnail2"
          src="/image-product-2-thumbnail.jpg"
        />
        <img
          className={currentImg === "image-product-3.jpg" && styled.activeImg}
          onClick={clickHandler}
          alt="thumbnail3"
          src="/image-product-3-thumbnail.jpg"
        />
        <img
          className={currentImg === "image-product-4.jpg" && styled.activeImg}
          onClick={clickHandler}
          alt="thumbnail4"
          src="/image-product-4-thumbnail.jpg"
        />
      </div>
    </div>
  );
}

export default ProductDetailLeftCol;
