"use client";
import React from "react";
import Hero from "./components/hero";
import Letter from "./components/letter";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
// import {motion} from "motion/react";
import HeroForm from "./components/hero-form";
import HeroFormBottom from "./components/hero-form-bottom";

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
    console.log(isOpen);

  }, [isOpen]);

  return (
    <div className="w-full h-full relative">
      <Header />
      <Hero handleToggle={handleToggleModal} />
      <Letter handleToggleModalBottom={handleToggleModalBottom} />
      <Footer />
      {isOpen && (
        <HeroForm isOpen={isOpen} handleToggleModal={handleToggleModal} />
      )}
      {isOpenBottom && (
        <HeroFormBottom handleToggleModalBottom={handleToggleModalBottom} />
      )}
    </div>
  );
}


