"use client";
import React from "react";
import Hero from "../components/en-page/hero";
import Letter from "../components/en-page/letter";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import HeroForm from "../components/en-page/hero-form";
import HeroFormBottom from "../components/en-page/hero-form-bottom";

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
