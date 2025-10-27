"use client";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

const Index = () => {

  // lang dropdown
  React.useEffect(() => {
    const path = window.location.pathname;

    if (path) {
      setIsLanguageActive(path);
    }
    if (path === "/") {
      setIsLanguageActive("/ro");
    }
  }, []);
  const [isActiveButton, setIsActiveButton] = React.useState(false);
  const [isLanguageActive, setIsLanguageActive] = React.useState("");

  // const handleOpenSelect = () => {
  //   setIsOpenSelect(!isOpenSelect);
  //   setDisabled(true);
  // };

  // const handleChangeValueSelect = (value) => {
  //   setValueSelect(value);
  //   setIsOpenSelect(false);
  //   setDisabled(false);
  // };

  // console.log("valueSelect", valueSelect);

  return (
    <header className={styles.header} id="header">
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
            <button
              type="button"
              className={
                !isActiveButton
                  ? styles.header_navigate__lang
                  : styles.header_navigate__lang_active
              }
              onClick={() => setIsActiveButton(!isActiveButton)}
            >
              <span
                className={`flex justify-center items-center h-[42rem] w-[20rem] sm:w-[38rem] ${
                  isActiveButton
                    ? "border-b-[0.36rem] sm:border-b-[1rem] border-b-white w-[20rem] sm:w-[37.5rem] h-[26rem] sm:h-[42rem]"
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
                    href={"/ru"}
                    className="flex justify-center items-center border-b-[0.36rem] sm:border-b-[1rem] border-b-white w-[20rem] h-[26rem] sm:w-[38rem] sm:h-[40rem] absolute top-[10rem] sm:top-[4rem] left-1/2 -translate-x-1/2 z-[2]"
                  >
                    {isLanguageActive === "/ro" && "ru"}
                  </Link>
                  <Link
                    href={`/en`}
                    className="flex justify-center items-center absolute top-[37rem] sm:top-[44rem] left-1/2 -translate-x-1/2 z-[2] w-[26rem] h-[26rem] sm:w-[38rem] sm:h-[44rem]"
                  >
                    {isLanguageActive === "/ro" && "en"}
                  </Link>
                </div>
              ) : (
                ""
              )}
            </button>
            {/* <button
              className={`${styles.lang__select} ${
                isOpenSelect && styles.lang__select_active
              }`}
              onClick={handleOpenSelect}
            >
              {!isOpenSelect ? valueSelect : ''}
              {isOpenSelect && (
                <div className={`${isOpenSelect && styles.lang__select_list}`}>
                  {langs.map((item) => (
                    <Link
                      href={`/${item.value}`}
                      key={item.id}
                      className={styles.lang__select_list_item}
                      onClick={() => handleChangeValueSelect(item.value)}
                      disabled={disabled === valueSelect}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </button> */}
            <Link href="/" className={styles.phone__link}>
              + 373 69 786 756
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
