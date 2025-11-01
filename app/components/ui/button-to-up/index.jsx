import React from 'react'
import { motion, useInView } from "motion/react";
import styles from "./styles.module.scss";

const Index = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    // margin: "-190px",
  });
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        ease: "easeInOut",
      }}
      href="#header"
      className={styles.letter__button_up}
    >
      <svg
        className="w-[12rem] h-[24rem] sm:w-[26rem] sm:h-[52rem]"
        viewBox="0 0 27 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 51.8333V0.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5 11.5L13.5 0.5L26.5 11.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}

export default Index