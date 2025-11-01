"use client";
import React from "react";
import styles from "./hero.module.scss";
import Facilities from "../facilities";
import Title from "../../ui/title";
import HeartAnimate from "../../ui/heart-animate";

const Hero = ({ handleToggle }) => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.hero__dark__building_shadow}></div>
        <HeartAnimate />

        <Title textTitle="coming soon" />

        <p className={styles.description}>Project launch in November</p>

        <button className={styles.button__detail} onClick={handleToggle}>
          <span className={styles.button__detail__text}>
            Discover details now
          </span>
          <span className={styles.button__detail__line_bottom}></span>
          <span className={styles.button__detail__sparkle}></span>
          <span className={styles.button__detail__sparkle_2}></span>
          <span className={styles.button__detail__sparkle_3}></span>
          <span className={styles.button__detail__sparkle_4}></span>
          <span className={styles.button__detail__sparkle_5}></span>
        </button>

        <p className={styles.location__title_text}>
          Prime location {""}
          <br className="block sm:hidden" />
          in the heart of {""}
          <br />
          Botanica district
        </p>
        <p className={styles.location__description_text}>
          Soon, a new residential complex that will {""}
          <br className="block" /> elevate the quality of urban living
        </p>

        <p className={styles.location__title_text__bottom}>
          A new standard {""}
          <br className="block" /> of urban living
        </p>

        <p className={styles.location__description_text__bottom}>
          Located between two iconic parks and two {""}
          <br className="block" /> garden squares — where tranquility becomes{" "}
          {""}
          <br className="block" /> part of your everyday life
        </p>
      </div>
      <Facilities />
    </div>
  );
};

export default Hero;
