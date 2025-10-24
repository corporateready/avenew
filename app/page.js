"use client";
import React from "react";
import Hero from "./components/hero";
import Letter from "./components/letter";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import HeroForm from "./components/hero-form";
// import HeroFormBottom from "./components/hero-form-bottom";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(true);
  // const [isOpenBottom, setIsOpenBottom] = React.useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  // const handleToggleModalBottom = () => {
  //   setIsOpenBottom(!isOpenBottom);
  // };

  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="w-full h-full ">
      <Header />
      <Hero handleToggle={handleToggleModal} />
      <Letter handleToggleModal={handleToggleModal} />
      <Footer />
      {isOpen && (
        <HeroForm isOpen={isOpen} handleToggleModal={handleToggleModal} />
      )}
      {isOpen && (
        <HeroForm isOpen={isOpen} handleToggleModal={handleToggleModal} />
      )}
    </div>
  );
}
