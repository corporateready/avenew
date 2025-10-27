import React from "react";
import styles from "./facilities.module.scss";

const Index = () => {
  return (
    <div className={styles.facilities}>
      <h6 className={styles.facilities__title}>
        Amenities that transform {""}
        <br className="block" /> comfort into lifestyle
      </h6>
      <div className={styles.facilities__inner}>
        <div className={styles.facilities__item}>
          <span className={styles.facilities__item__title}>
            Playgrounds {""}
            <br className="block" /> for all ages
          </span>
        </div>
        <div className={styles.facilities__item_2}>
          <span className={styles.facilities__item__title}>
            On-site school {""}
            <br className="block" /> and kindergarten
          </span>
        </div>
        <div className={styles.facilities__item_3}>
          <span className={styles.facilities__item__title}>
            Sufficient underground {""}
            <br className="block" /> parking for each {""}
            <br className="hidden sm:block" /> resident
          </span>
        </div>
        <div className={styles.facilities__item_4}>
          <span className={styles.facilities__item__title}>
            Outdoor Art&Lounge {""}
            <br className="hidden sm:block" /> for {""}
            <br className="block sm:hidden" /> adults with BBQ {""}
            <br className="hidden sm:block" /> and WiFi
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
