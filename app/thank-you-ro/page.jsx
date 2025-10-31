"use client";
import React from 'react'
import Header from "../components/ro-page/shared/header-thanks"
import Footer from "../components/ro-page/shared/footer-thanks"
import styles from "./thanks.module.scss"

const page = () => {
  return (
    <div className="w-full h-full relative top-0 left-0 z-0 flex flex-col">
      <div className={styles.thanks}>
        <Header />

        <div className="w-full h-full flex flex-col ">
          <div className="px-60 sm:px-0 w-full sm:w-5256 h-full mx-auto">
            <h2 className="w-full text-[40rem] sm:text-[78rem] text-white font-medium leading-[100%] mt-1108 sm:mt-1600 text-center sm:text-left">
              Mulțumim!
            </h2>
            <p className="text-[26rem] sm:text-[30rem] text-[#86878B] font-normal leading-auto sm:leading-180 mt-96 text-center sm:text-left">
              Solicitarea ta a fost {""}
              <br className="block sm:hidden"/> înregistrată cu succes. {""}
              <br />
              În cel mai scurt timp, managerul revine cu un apel pentru {""}
              <br />
              a-ți oferi toate detaliile.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page