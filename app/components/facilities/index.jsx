import React from "react";
import styles from "./facilities.module.scss";

const Index = () => {
  return (
    <div className={styles.facilities}>
      <h6 className={styles.facilities__title}>
        Facilități care {""}
        <br className="" /> transformă confortul {""}
        <br className="" /> în stil de viață
      </h6>
      <div className={styles.facilities__inner}>
        <div className={styles.facilities__item}>
          <span className={styles.facilities__item__title}>
            Terenuri de joacă {""}
            <br className="" /> pentru toate vârstele
          </span>
        </div>
        <div className={styles.facilities__item_2}>
          <span className={styles.facilities__item__title}>
            Școală și grădiniță {""}
            <br className="" /> în incintă complexului
          </span>
        </div>
        <div className={styles.facilities__item_3}>
          <span className={styles.facilities__item__title}>
            Locuri de parcări subterane {""}
            <br className="" /> suficiente pentru fiecare {""}
            <br className="" /> locatar
          </span>
        </div>
        <div className={styles.facilities__item_4}>
          <span className={styles.facilities__item__title}>
            Art&Lounge exterior pentru {""}
            <br className="" /> adulți cu BBQ și WiFi
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
