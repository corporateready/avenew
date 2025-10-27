import React from 'react'
import styles from "./button.module.scss";

function Index({ formSubmitTrack }) {
  return (
    <button className={styles.btn} onClick={formSubmitTrack}>
      {/* <svg className="w-[180rem] h-[60rem]" viewBox="0 0 180 60">
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
      </svg> */}
      <span>Send</span>
    </button>
    
  );
}

export default Index