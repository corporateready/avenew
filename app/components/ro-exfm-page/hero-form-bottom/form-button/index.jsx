import React from "react";
import styles from "./button.module.scss";

function Index({ formSubmitTrack }) {
  return (
    <button className={styles.button} onClick={formSubmitTrack}>
      Trimite
    </button>
  );
}

export default Index;
