import React from 'react'
import styles from "./button.module.scss";

function Index({ formSubmitTrack }) {
  return (
    <button className={styles.button} onClick={formSubmitTrack}>
      Send
    </button>
  );
}

export default Index