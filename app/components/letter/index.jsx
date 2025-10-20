import React from "react";
import styles from "./letter.module.scss";
import logo from "../../../public/shared/Avenew botanica-logo.png";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.letter}>
      <Image
        src={logo}
        width={70}
        h={14}
        className="absolute top-[390rem] left-1/2 -translate-1/2"
        alt=""
      />
      <p className={styles.letter__title}>Află primul detalii</p>
      <p className={styles.letter__description}>
        Locurile pentru preînregistrare
        <br /> sunt limitate. Află toate detaliile
        <br />
        despre lansarea proiectului
        <br /> chiar acum.
      </p>
      <button className={styles.letter__button_access}>
        Deschide accesul prioritar
      </button>
    </div>
  );
};

export default Index;
