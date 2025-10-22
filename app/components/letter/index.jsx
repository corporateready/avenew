import React from "react";
import styles from "./letter.module.scss";
import Image from "next/image";

const Index = ({ handleToggleModalBottom }) => {
  return (
    <div className={styles.letter}>
      <img
        src="/shared/Avenew botanica-logo.png"
        className={styles.letter__logo}
        alt="Avenew botanica logo"
      />
      <p className={styles.letter__title}>Află primul detalii</p>
      <p className={styles.letter__description}>
        Locurile pentru preînregistrare
        <br className="block sm:hidden"/> sunt limitate. {""}
        <br className="hidden sm:block" /> Află toate detaliile
        <br className="block sm:hidden" /> despre lansarea {""}
        <br className="hidden sm:block" /> proiectului {""}
        <br className="block sm:hidden" /> chiar acum.
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        Deschide accesul prioritar
      </button>
    </div>
  );
};

export default Index;
