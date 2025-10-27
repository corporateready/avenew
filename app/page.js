"use client";
import React from "react";
import Hero from "./components/ro-page/hero";
import Letter from "./components/ro-page/letter";
import Footer from "./components/ro-page/shared/footer";
import Header from "./components/ro-page/shared/header";
import HeroForm from "./components/ro-page/hero-form";
import HeroFormBottom from "./components/ro-page/hero-form-bottom";

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
    <div className="w-full h-full ">
      <Header />
      <Hero handleToggle={handleToggleModal} />
      <Letter handleToggleModalBottom={handleToggleModalBottom} />
      <Footer />
      {isOpen && <HeroForm handleToggleModal={handleToggleModal} />}
      {isOpenBottom && (
        <HeroFormBottom handleToggleModalBottom={handleToggleModalBottom} />
      )}
    </div>
  );
}
