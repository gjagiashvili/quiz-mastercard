import React from "react";
import styles from "../modules/Body.module.scss";
const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}></div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Priceless to me</h1>
          <p className={styles.paragraph}>
            Mastercard is a global technology company that plays a pivotal role
            in the evolving landscape of digital payments. With a rich history
            dating back to its founding in 1966, Mastercard has consistently
            pioneered innovative solutions to simplify and enhance the way
            people and businesses transact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
