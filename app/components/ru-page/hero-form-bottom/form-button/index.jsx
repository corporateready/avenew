import React from 'react'
import styles from "./button.module.scss";

function Index({ handleToggleModalBottom, formSubmitTrack }) {
  return (
    <button className={styles.button} onClick={formSubmitTrack}>
      Отправить
    </button>
  );
}

export default Index