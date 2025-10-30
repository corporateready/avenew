import React from "react";
import styles from "./letter.module.scss";
import { motion, useInView } from "motion/react";

const Index = ({ handleToggleModalBottom }) => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, {
      once: false,
    });

  return (
    <div className={styles.letter}>
      <img
        src="/shared/Avenew botanica-logo.png"
        className={styles.letter__logo}
        alt="Avenew botanica logo"
      />
      <p className={styles.letter__title}>Узнайте первым</p>
      <p className={styles.letter__description}>
        Количество мест для предварительной {""}
        <br className="" /> регистрации ограничено. {""}
        <br className="block sm:hidden" /> Узнайте все {""}
        <br className="hidden sm:block" /> детали о запуске {""}
        <br className="block sm:hidden" /> проекта {""}
        <br className="hidden sm:block" /> прямо сейчас.
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Получить приоритетный доступ</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>

    </div>
  );
};

export default Index;
