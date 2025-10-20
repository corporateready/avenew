"use client";
import React from "react";
import styles from "./hero.module.scss";
import Facilities from "../facilities";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.location__heart}></div>

        <h1 className={styles.title}>coming soon</h1>
        <p className={styles.description}>Lansarea proiectului în noiembrie </p>
        <button className={styles.button__detail}>
          <span className={styles.button__detail__text}>Află detalii acum</span>
          <span className={styles.button__detail__line_bottom}></span>
          <span className={styles.button__detail__sparkle}></span>
          <span className={styles.button__detail__sparkle_2}></span>
          <span className={styles.button__detail__sparkle_3}></span>
          <span className={styles.button__detail__sparkle_4}></span>
          <span className={styles.button__detail__sparkle_5}></span>
        </button>
        <p className={styles.location__title_text}>
          Locație fără {""}
          <br className="" /> precedent în inima {""}
          <br className="" /> secorului Botanica
        </p>
        <p className={styles.location__description_text}>
          În curând, un nou ansamblu rezidențial
          <br className="" /> care va ridica calitatea vieții urbane
        </p>

        <p className={styles.location__title_text__bottom}>
          Un nou standard {""}
          <br className="" /> de trai urban
        </p>

        <p className={styles.location__description_text__bottom}>
          Între două parcuri emblematice
          <br className="" />
          și două scuaruri verzi — unde liniștea
          <br className="" />
          devine parte din viața ta de zi cu zi
        </p>
      </div>
      <Facilities />
    </div>
  );
};

export default Hero;
