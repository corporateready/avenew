import React from "react";
import styles from "./letter.module.scss";;

const Index = ({ handleToggleModalBottom }) => {

  return (
    <div className={styles.letter}>
      <img
        src="/shared/Avenew botanica-logo.png"
        className={styles.letter__logo}
        alt="Avenew botanica logo"
      />
      <p className={styles.letter__title}>Pre-sale access</p>
      <p className={styles.letter__description}>
        Pre-registration spots are limited. {""}
        <br className="block" /> Get all the details about the project {""}
        <br className="block" /> launch right now.
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Get priority access</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>

      
    </div>
  );
};

export default Index;
