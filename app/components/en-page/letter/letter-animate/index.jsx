"use client"
import React from "react";
import styles from "./letter.module.scss";
import { motion, useInView } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Index = ({ handleToggleModalBottom }) => {
  const isLaptop = useMediaQuery({
    query: '(min-width: 1200px)'
  })
  const letterSection = React.useRef()

const isVisible = useInView(letterSection, {
  once: false,
  margin: isLaptop ? "-200px" : "-190px"
});
console.log("isVisible ", isVisible)
  return (
    <div className="w-full h-auto relative">
      <motion.div
        ref={letterSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.letter}
      >
        <span className={styles.letter__star_animate__1}></span>
        <span className={styles.letter__star_animate__2}></span>
        <span className={styles.letter__star_animate__3}></span>
        <span className={styles.letter__star_animate__4}></span>
        {isVisible && (
          <motion.div
            className={styles.letter__body}
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/shared/Avenew botanica-logo.png"
              className={styles.letter__logo}
              alt="Avenew botanica logo"
            />
            <p className={styles.letter__title}>Reserve Your Spot{""}
            <br className={styles.br}/> Now</p>
            <p className={styles.letter__description}>
              Request details of the exclusive investor offer. {""}
              <br />
              Limited spots available at the pre-sale stage — {""}
              <br />a unique opportunity available only {""}
              <br />
              to a select number of investors
            </p>
          </motion.div>
        )}
      </motion.div>
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
