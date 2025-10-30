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
                className={`flex justify-center items-center h-[42rem] w-[26rem] sm:w-[38rem] ${
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
                    className="flex justify-center items-center border-b-[0.36rem] sm:border-b-[1rem] border-b-white w-[20rem] h-[26rem] sm:w-[38rem] sm:h-[40rem] absolute top-[16rem] sm:top-[4rem] left-1/2 -translate-x-1/2 z-[2]"
                  >
                    {isLanguageActive === "/ro" && "ru"}
                  </Link>
                  <Link
                    href={`/en`}
                    className="flex justify-center items-center absolute top-[42rem] sm:top-[44rem] left-1/2 -translate-x-1/2 z-[2] w-[26rem] h-[26rem] sm:w-[38rem] sm:h-[44rem]"
                  >
                    {isLanguageActive === "/ro" && "en"}
                  </Link>
                </div>
              ) : (
                ""
              )}
            </button>

            <a href="tel:+37369786756" className={styles.phone__link}>
              <svg
                className="w-[17rem] h-[17rem] sm:w-0 sm:h-0"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5609 12.9785C16.547 12.9619 13.964 10.5692 13.9474 10.5526C13.5692 10.2731 13.0952 10.148 12.6249 10.2037C12.1546 10.2593 11.7246 10.4912 11.4251 10.8508C10.1032 12.4744 7.10964 9.44413 5.92964 7.49198C5.30771 6.1346 6.17777 5.60548 6.25187 5.53952C7.28631 4.59417 6.9358 3.53965 6.5918 3.09735L4.22943 0.466595C2.72296 -1.01213 0.783717 1.45598 0.514483 1.91192C-1.74479 5.36725 4.14074 11.4877 4.60866 11.9771C4.86178 12.2807 11.4468 18.7119 14.9484 16.5606C15.4022 16.3218 18.0234 14.5137 16.5609 12.9785ZM16.3644 14.1414C16.2426 14.9389 15.0722 15.7818 14.6315 16.0392C11.4892 17.8729 5.44184 11.9413 5.07107 11.5726C4.98206 11.4813 -0.986953 5.35993 1.03459 2.24099C1.31226 1.82004 2.21227 0.707597 3.03334 0.6165C3.17059 0.601761 3.30946 0.61826 3.43913 0.664713C3.5688 0.711166 3.68577 0.786318 3.78093 0.884314L6.11125 3.47936C6.17279 3.56127 6.68478 4.29717 5.84724 5.07944C5.3759 5.39494 4.7006 6.33156 5.3759 7.76321C5.64379 8.22156 5.95186 8.65623 6.29662 9.06229C7.07936 10.082 8.05762 10.9424 9.1766 11.5953C10.5954 12.3008 11.5747 11.6745 11.9135 11.2245C12.745 10.4338 13.4757 10.9602 13.5383 11.0077L16.1093 13.394C16.208 13.4907 16.2825 13.6086 16.3267 13.7383C16.371 13.868 16.3839 14.006 16.3644 14.1414Z"
                  fill="white"
                />
              </svg>
              + 373 69 786 756
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
