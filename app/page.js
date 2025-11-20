// import React from 'react'

// const page = () => {
//   return (
//     <div className="w-full h-screen bg-white text-gray-500 text-[22rem] flex justify-center items-center">
//       <p >
//         <span className="text-gray-600 font-medium">404</span>, page not found.
//       </p>
//     </div>
//   );
// }

// export default page
"use client";
import React from "react";
import Hero from "./components/ro-page/hero";
import Letter from "./components/ro-page/letter-animate";
import Footer from "./components/shared/pages/footer";
import HeroForm from "./components/ro-page/hero-form";
import HeroFormBottom from "./components/ro-page/hero-form-bottom";
import styles from "./styles.module.scss";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
export default function Home() {
  const path = usePathname();

  const [isExfm, setIsExfm] = React.useState(false);
  React.useEffect(() => {
    if (path === "/") {
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
      transition={{ duration: 0.1 }}
      className={styles.exfm_wrapper}
    >
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
