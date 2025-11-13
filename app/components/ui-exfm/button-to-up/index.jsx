import React from 'react';
import styles from "./styles.module.scss";

const Index = () => {

  return (
    <a href="#header" className={styles.letter__button_up}>
      <svg
        className={styles.letter__button_up_icon}
        viewBox="0 0 9 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.39844 15.9V0.5"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.5 3.8L4.4 0.5L8.3 3.8"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  );
}

export default Index