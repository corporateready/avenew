import React from 'react'
import styles from "./button.module.scss";

function Index({ handleToggleModalBottom, formSubmitTrack }) {
  return (
    <button className={styles.button} onClick={handleToggleModalBottom}>
      Send
    </button>
  );
}

export default Index