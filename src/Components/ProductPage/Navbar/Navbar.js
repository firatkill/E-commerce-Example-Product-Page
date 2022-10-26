import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
function Navbar() {
  const styled = NavbarCSS;
  const showCart = () => {
    
  };
  return (
    <div className={styled.NavbarContainer}>
      <ul className={styled.listGroup}>
        <li className={styled.brand}>sneakers</li>
        <Link>
          <li className={styled.listItem}>Collections</li>
        </Link>
        <Link>
          <li className={styled.listItem}>Men</li>
        </Link>
        <Link>
          <li className={styled.listItem}>Women</li>
        </Link>
        <Link>
          <li className={styled.listItem}>About</li>
        </Link>
        <Link>
          <li className={styled.listItem}>Contact</li>
        </Link>
      </ul>
      <div>
        <ul className={styled.customer}>
          <li onClick={showCart} className={styled.cartIcon}>
            <BsCart3 />
          </li>
          <li className={styled.profileIcon}>
            <img alt="avatar" src="/image-avatar.png" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
