import React from "react";
import styles from "./letter.module.scss";
import { motion, useInView } from "motion/react";

const Index = ({ handleToggleModalBottom }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.letter}
    >
      <img
        src="/shared/Avenew botanica-logo.png"
        className={styles.letter__logo}
        alt="Avenew botanica logo"
      />
      <p className={styles.letter__title}>Află primul detalii</p>
      <p className={styles.letter__description}>
        Locurile pentru preînregistrare sunt limitate. {""}
        <br className="block" /> Află toate detaliile despre lansarea {""}
        <br className="block" /> proiectului chiar acum.
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Deschide accesul prioritar</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>

      
    </motion.div>
  );
};

export default Index;
