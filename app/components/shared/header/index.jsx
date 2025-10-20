'use client'
import React from 'react'
import Image from 'next/image';
import Logo from "../../../../public/shared/Avenew botanica-logo.png";
import styles from "./header.module.scss"
import Link from 'next/link';

const Index = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <Image src={Logo} alt="logo" width={130} height={26} />
            </div>
            <div className={styles.navigate}>
              <button className={styles.lang__select}>ro</button>
              <Link href="/" className={styles.phone__link}>+373 79 800 000</Link>
              </div>
          </div>
        </div>
    </header>
  );
}

export default Index