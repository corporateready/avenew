"use client";
import React from "react";
import Hero from "../components/ro-exfm-page/hero";
import Letter from "../components/ro-exfm-page/letter";
import Footer from "../components/shared/exfm-pages/footer";
import HeroForm from "../components/ro-exfm-page/hero-form";
import HeroFormBottom from "../components/ro-exfm-page/hero-form-bottom";
import styles from "./styles.module.scss"
import { motion } from "motion/react";
import {usePathname} from "next/navigation";
import posthog from "posthog-js";


export default function Home() {

  React.useEffect(() => {
    posthog.init("phc_yM2yvy4tmvUDIXwYjowV0wskT8g19nfhNFVuwaR6JCM", {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
      capture_pageview: false,
    });
  }, []);

  const path = usePathname();
  
  const [isExfm, setIsExfm] = React.useState(false);
  React.useEffect(() => {
    if (path === "/exfm") {
      setIsExfm(true);
    }
    
  }, [path]);

  React.useEffect(() => {
    if (isExfm) {
      document.body.style.backgroundColor = "#070b1b";
    } else {
      document.body.style.backgroundColor = "#060916";
    }
  }, [isExfm]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenBottom, setIsOpenBottom] = React.useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleModalBottom = () => {
    setIsOpenBottom(!isOpenBottom);
  };

  React.useEffect(() => {
    if (isOpen || isOpenBottom) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isOpenBottom]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.exfm_wrapper}
    >
      <Hero handleToggle={handleToggleModal} />
      <Letter handleToggleModalBottom={handleToggleModalBottom} />
      <Footer />
      {isOpen && <HeroForm handleToggleModal={handleToggleModal} posthog={posthog}/>}
      {isOpenBottom && (
        <HeroFormBottom handleToggleModalBottom={handleToggleModalBottom} posthog={posthog}/>
      )}
    </motion.div>
  );
}
