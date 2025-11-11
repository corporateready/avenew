"use client";
import React from "react";
import styles from "./hero.module.scss";
import Facilities from "../facilities";
import Title from "../../ui-exfm/title";
import HeartAnimate from "../../ui-exfm/heart-animate";
import Header from "../../shared/pages/header";

const Hero = ({ handleToggle }) => {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero}>
        <Header />
        <div className={styles.hero__dark__building_shadow}></div>
        <HeartAnimate />

        <Title textTitle="coming soon" />

        <p className={styles.hero__text}>
          Ofertă specială {""}
          <br className="inline-block sm:hidden" />
          pentru {""}
          {/* <br className="block sm:hidden" /> */}
          investitori  {""}
          {/* <br className="hidden sm:block" />la evenimentul {""}
            <span className={styles.text__gradient}>EXPO FORUM MOLDOVA </span> */}
        </p>

        <p className={styles.description}>
          Investește într-un proiect imobiliar nou, înainte {""}
          <br className="block" /> de startul vânzărilor{" "}
          <span>din decembrie 2025</span>
        </p>

        <button className={styles.button__detail} onClick={handleToggle}>
          <span className={styles.button__detail__text}>Află detalii acum</span>
          <span className={styles.button__detail__line_bottom}></span>
          <span className={styles.button__detail__sparkle}></span>
          <span className={styles.button__detail__sparkle_2}></span>
          <span className={styles.button__detail__sparkle_3}></span>
          <span className={styles.button__detail__sparkle_4}></span>
          <span className={styles.button__detail__sparkle_5}></span>
          <span className={styles.button__detail__sparkle_6}></span>
        </button>
        {/* <p className={styles.oferta__text}>
          Oferta disponibilă până în data de <span>15.11.2025</span>
        </p> */}

        <p className={styles.location__title_text}>
          Locație fără {""}
          <br className="block sm:hidden" /> precedent {""}
          <br className="hidden sm:block" /> în inima {""}
          <br className="block sm:hidden" /> sectorului Botanica
        </p>
        <p className={styles.location__description_text}>
          În curând, un nou ansamblu rezidențial
          <br className="block sm:hidden" /> care va ridica {""}
          <br className="hidden sm:block" /> calitatea vieții urbane
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
