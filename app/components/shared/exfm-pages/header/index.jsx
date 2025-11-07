"use client";
import React from "react";
import styles from "./styles.module.scss";
import LangToggler from "../../../ui-exfm/lang-toggler";
import PhoneButton from "../../../ui-exfm/phone-button";
import HeaderLogo from "../../../ui-exfm/header-logo";

const Index = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.inner}>
          <HeaderLogo
            widthMobile="122rem"
            heightMobile="25rem"
            widthLaptop="212rem"
            heightLaptop="44rem"
          />

          <div className={styles.navigate}>
            <LangToggler />

            <PhoneButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
