import React from 'react'
import { motion } from "motion/react";
import styles from "./hero-form.module.scss";

const Index = ({ handleToggleModal }) => {
  return (
    <div className={styles.hero__form} onClick={handleToggleModal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.hero__form_inner}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.hero__form_progress__wrapper}></div>
        <p className={styles.hero__form_title}>
          Introdu datele tale de contact
          <br /> pentru a primi detalii
        </p>
        <form action="" className={styles.hero__form_content}>
          <input type="text" name="" placeholder="Nume, Prenume" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="" placeholder="+40" />
          <button className={styles.button__detail} >
            Trimite
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Index