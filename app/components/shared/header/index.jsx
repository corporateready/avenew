'use client'
import React from 'react'
import styles from "./header.module.scss"
import Link from 'next/link';

const Index = () => {
  const [isOpenSelect, setIsOpenSelect] = React.useState("ro");

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img
              src="/shared/Avenew botanica-logo.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className={styles.navigate}>
            <button className={styles.lang__select}>
              {isOpenSelect}
              {/* <div className="w-full h-[80rem] absolute top-[100%] left-0 z-[1] flex flex-col items-center justify-center border-[0.35rem] border-white rounded-[13rem]">
                <span className="w-full h-[42rem]">ru</span>
                <span className="w-full h-[42rem]">en</span>
              </div>
              <span className="w-full h-[42rem]">ru</span>
              <span className="w-full h-[42rem]">en</span> */}
            </button>
            {/* <button
              type="button"
              className={
                !isActiveButton
                  ? styles.header_navigate__lang
                  : styles.header_navigate__lang_active
              }
              onClick={() => setIsActiveButton(!isActiveButton)}
            >
              <span
                className={`flex justify-center items-center p-[10rem] ${
                  isActiveButton
                    ? "border-b-[1rem] border-b-[#D9D9D9]/50 w-[28rem] sm:w-[34rem]"
                    : "border-0"
                }`}
              >
                {isLanguageActive.slice(1, 3)}
              </span>
              {isActiveButton ? (
                <div
                  onChange={(e) => e.stopPropagation()}
                  className={styles.header__drop_lang}
                >
                  <Link
                    href={"/"}
                    className="flex justify-center items-center border-b-[1rem] border-b-[#D9D9D9]/50 absolute top-0 left-[5rem] z-[2] w-[26rem] sm:w-[34rem] h-[32rem]"
                  >
                    {isLanguageActive === "/ro" && "en"}
                  </Link>
                  <Link
                    href={`/ru`}
                    className="flex justify-center items-center absolute top-[32rem] left-0 z-[2] w-full h-[36rem]"
                  >
                    {isLanguageActive === "/ro" && "ru"}
                  </Link>
                </div>
              ) : (
                ""
              )}
            </button> */}
            <Link href="/" className={styles.phone__link}>
              +373 79 800 000
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Index