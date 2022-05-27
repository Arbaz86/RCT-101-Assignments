import React from "react";
import styles from "./Cart.module.css";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Cart = ({
  date,
  logo,
  btnName,
  heading,
  subheading,
  devices,
  color,
}) => {
  return (
    <div className={color === "orange" ? styles.cartOrange : styles.cartWhite}>
      <div className={styles.flex_Left}>
        <p className={styles.dateMob}>{date}</p>
        <button className={styles.btn}>{btnName}</button>
        <h1 className={styles.heading}>{heading}</h1>
        <h1 className={styles.heading}>{subheading}</h1>
        <p className={styles.dateMob}>{devices}</p>
      </div>
      <div className={styles.flex_Right}>
        <img src={logo} width="75" height="65" alt={heading} />
        <button className={styles.arrowBtn}>
          <HiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};
