import React from 'react'
import styles from "./styles.module.scss";
import { motion } from "motion/react";

const Index = ({ textTitle }) => {
  return (
    <motion.h1
    className={styles.title}
      // className="text-white/63 text-[74rem] uppercase leading-[102%] absolute top-464 left-1/2 -translate-x-1/2 z-1 sm:w-max sm:text-center sm:text-[112rem] sm:font-medium sm:leading-none sm:ml-21 sm:top-464 sm:left-1/2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      {textTitle}
    </motion.h1>
  );
}

export default Index