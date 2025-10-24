import React from 'react'
import { motion } from "motion/react";
import styles from "./hero-form.module.scss";

const Index = ({ handleToggleModal }) => {
  return (
    <div className={styles.hero__form} onClick={handleToggleModal}>
      <button
        className="inline-flex w-[18rem] h-[18rem] absolute top-[70rem] -translate-y-1/2 left-[396rem] -translate-x-1/2 z-[12] sm:hidden sm:w-0"
        onClick={handleToggleModal}
      >
        <svg
          className="w-full h-full absolute top-0 left-0"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1L1 17M1 1L17 17"
            stroke="#494B54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.hero__form_inner}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="sm:inline-flex sm:w-[16rem] sm:h-[16rem] sm:absolute sm:top-[20rem] sm:left-[490rem] sm:-translate-x-1/2 sm:z-[12] hidden"
          onClick={handleToggleModal}
        >
          <svg
            className="w-full h-full absolute top-0 left-0"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L1 17M1 1L17 17"
              stroke="#494B54"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={styles.hero__form_progress__wrapper}>
          <span className={styles.hero__form_progress__wrapper__line}></span>
          <span className="text-[6rem] text-white font-semibold absolute top-1/2  left-[48%] -translate-x-1/2 -translate-y-1/2 z-10">
            50%
          </span>
        </div>
        <p className={styles.hero__form_title}>
          Introdu datele tale de contact
          <br /> pentru a primi detalii
        </p>
        <form action="" className={styles.hero__form_content}>
          <input type="text" name="" placeholder="Nume, Prenume" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="" placeholder="+40" />
          <button className={styles.button__detail}>Trimite</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Index