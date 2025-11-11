"use client";
import React from "react";
import Header from "../components/ro-exfm-page/shared/header-thanks";
import Footer from "../components/ro-exfm-page/shared/footer-thanks";
import styles from "../exfm/thanks.module.scss";
import { motion } from "motion/react";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.thanks_overflow}
    >
      <div className={styles.thanks}>
        <Header />

        <div className="w-full h-full flex flex-col ">
          <div className="px-60 sm:px-0 w-full sm:w-5256 h-full mx-auto">
            <h2 className="w-full text-[40rem] sm:text-[78rem] text-white font-medium leading-[100%] mt-[20dvh] sm:mt-[44.3dvh] text-center sm:text-left">
              Thank you!
            </h2>
            <p className="text-[26rem] sm:text-[30rem] text-[#86878B] font-normal leading-[120%] sm:leading-180 mt-[3dvh] sm:mt-[4vh] text-center sm:text-left">
              Your request has been successfully registered. {""}
              <br />
              <span className="block mt-[1.5vh] sm:mt-0">
                Our manager will contact you {""}
                <br className="inline-block sm:hidden"/>shortly to provide all {""}
                <br className="inline-block sm:hidden"/>the details.
              </span>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default page;
