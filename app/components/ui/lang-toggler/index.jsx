import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {motion} from "motion/react";

const Index = () => {
  React.useEffect(() => {
    const path = window.location.pathname;

    if (path) {
      setIsLanguageActive(path);
    }
    if (path === "/") {
      setIsLanguageActive("/ro");
    }
    if (path === "/ru") {
      setIsLanguageActive("/ru");
    }
    if (path === "/en") {
      setIsLanguageActive("/en");
    }
  }, []);
  
  const [isActiveButton, setIsActiveButton] = React.useState(false);
  const [isLanguageActive, setIsLanguageActive] = React.useState("");

  // const handleOpenSelect = () => {
  //   setIsOpenSelect(!isOpenSelect);
  //   setDisabled(true);
  // };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      type="button"
      className={
        !isActiveButton
          ? styles.header_navigate__lang
          : styles.header_navigate__lang_active
      }
      onClick={() => setIsActiveButton(!isActiveButton)}
    >
      <span
        className={`flex justify-center items-center h-[44rem] w-[52rem] sm:w-[38rem] ${
          isActiveButton
            ? "border-b-[0.36rem] sm:border-b-[1rem] border-b-white w-[52rem] sm:w-[37.5rem] h-[44rem] sm:h-[42rem]"
            : "border-0"
        }`}
      >
        {isLanguageActive.slice(1, 3)}
      </span>
      {isActiveButton ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onChange={(e) => e.stopPropagation()}
          className={styles.header__drop_lang}
        >
          <Link
            href={
              isLanguageActive === "/ro"
                ? "/ru"
                : isLanguageActive === "/"
                ? "/en"
                : "/"
            }
            className="flex justify-center items-center border-b-[0.36rem] sm:border-b-[1rem] border-b-white w-[48rem] h-[44rem] sm:w-[38rem] sm:h-[40rem] absolute top-0 sm:top-[4rem] left-1/2 -translate-x-1/2 z-[2]"
          >
            {isLanguageActive === "/ro" && "ru"}
            {isLanguageActive === "/ru" && "ro"}
            {isLanguageActive === "/en" && "ro"}
          </Link>
          <Link
            href={
              isLanguageActive === "/ro"
                ? "/en"
                : isLanguageActive === "/ru"
                ? "/en"
                : "/ru"
            }
            className="flex justify-center items-center absolute top-[52rem] sm:top-[44rem] left-1/2 -translate-x-1/2 z-[2] w-[26rem] h-[26rem] sm:w-[38rem] sm:h-[44rem]"
          >
            {isLanguageActive === "/ro" && "en"}
            {isLanguageActive === "/ru" && "en"}
            {isLanguageActive === "/en" && "ru"}
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </motion.button>
  );
};

export default Index;
