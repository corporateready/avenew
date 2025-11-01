"use client";
import React from "react";
import Hero from "./components/ro-page/hero";
import Letter from "./components/ro-page/letter";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import HeroForm from "./components/ro-page/hero-form";
import HeroFormBottom from "./components/ro-page/hero-form-bottom";
import { motion } from "motion/react";

export default function Home() {
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
      className="w-full h-full "
    >
      <Header />
      <Hero handleToggle={handleToggleModal} />
      <Letter handleToggleModalBottom={handleToggleModalBottom} />
      <Footer />
      {isOpen && <HeroForm handleToggleModal={handleToggleModal} />}
      {isOpenBottom && (
        <HeroFormBottom handleToggleModalBottom={handleToggleModalBottom} />
      )}
    </motion.div>
  );
}
