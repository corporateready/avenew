import React from "react";
import styles from "./facilities.module.scss";

const Index = () => {
  return (
    <div className={styles.facilities}>
      <h6 className={styles.facilities__title}>
        Удобства, которые превращают комфорт {""}
        <br className="block sm:hidden" /> в стиль жизни
      </h6>
      <div className={styles.facilities__inner}>
        <div className={styles.facilities__item}>
          <span className={styles.facilities__item__title}>
            Игровые площадки {""}
            <br className="block" /> для всех возрастов
          </span>
        </div>
        <div className={styles.facilities__item_2}>
          <span className={styles.facilities__item__title}>
            Школа и детский сад {""}
            <br className="hidden sm:block" /> на {""}
            <br className="block sm:hidden" /> территории {""}
            <br className="hidden sm:block" /> комплекса
          </span>
        </div>
        <div className={styles.facilities__item_3}>
          <span className={styles.facilities__item__title}>
            Подземный паркинг {""}
            <br className="block" /> для каждого жильца
          </span>
        </div>
        <div className={styles.facilities__item_4}>
          <span className={styles.facilities__item__title}>
            Уличный Art&Lounge {""}
            <br className="block" /> для взрослых {""}
            <br className="hidden sm:block" /> с BBQ и WiFi
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
