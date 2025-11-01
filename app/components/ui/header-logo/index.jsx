import React from "react";
import styles from "./styles.module.scss";
import {motion} from "motion/react";

const Index = ({widthMobile, heightMobile, widthDesktop, heightDesktop}) => {

  return (
    <div className={`w-[${widthMobile}] h-[${heightMobile}] sm:w-[${widthDesktop}] sm:h-[${heightDesktop}]`}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        src="/shared/Avenew botanica-logo.png"
        alt="logo"
        className="w-full h-full"
      />
    </div>
  );
};

export default Index;
