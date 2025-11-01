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

        <p className={styles.description}>Запуск проекта в ноябре</p>

        <button className={styles.button__detail} onClick={handleToggle}>
          <span className={styles.button__detail__text}>
            Узнайте детали сейчас
          </span>
          <span className={styles.button__detail__line_bottom}></span>
          <span className={styles.button__detail__sparkle}></span>
          <span className={styles.button__detail__sparkle_2}></span>
          <span className={styles.button__detail__sparkle_3}></span>
          <span className={styles.button__detail__sparkle_4}></span>
          <span className={styles.button__detail__sparkle_5}></span>
        </button>

        <p className={styles.location__title_text}>
          Беспрецедентная локация {""}
          <br className="" /> в сердце сектора Ботаника
        </p>
        <p className={styles.location__description_text}>
          Совсем скоро — новый жилой комплекс, {""}
          <br className="block sm:hidden" /> который {""}
          <br className="hidden sm:block" /> поднимет качество городской {""}
          <br className="block sm:hidden" /> жизни {""}
          <br className="hidden sm:block" /> на новый уровень
        </p>

        <p className={styles.location__title_text__bottom}>
          Новый стандарт {""}
          <br className="" /> городской жизни
        </p>

        <p className={styles.location__description_text__bottom}>
          Между двумя большими парками и двумя {""}
          <br className="" /> зелеными скверами — где спокойствие {""}
          <br className="" /> становится частью вашей {""}
          <br className="" /> повседневной жизни
        </p>
      </div>
      <Facilities />
    </div>
  );
};

export default Hero;
