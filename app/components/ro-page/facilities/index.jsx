import React from "react";
import styles from "./facilities.module.scss";
import Image from "next/image";
import { motion } from "motion/react";

const Index = () => {
  return (
    <div className={styles.facilities}>
      <p className={styles.facilities__title}>
        Facilități care {""}
        <br className="block sm:hidden" /> transformă {""}
        <br className="hidden sm:block" /> confortul {""}
        <br className="block sm:hidden" /> în stil de viață
      </p>
      <div className={styles.facilities__inner}>
        <Image
          src="/shared/facilities-item-1.avif"
          alt="Hero"
          width={420}
          height={368}
          quality={85}
          className={styles.facilities__item}
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
        />
        <Image
          src="/shared/facilities-item-2.avif"
          alt="Hero"
          width={420}
          height={368}
          quality={85}
          className={styles.facilities__item}
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
        />
        <Image
          src="/shared/facilities-item-3.avif"
          alt="Hero"
          width={420}
          height={368}
          quality={85}
          className={styles.facilities__item}
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
        />
        <Image
          src="/shared/facilities-item-4.avif"
          alt="Hero"
          width={420}
          height={368}
          quality={85}
          className={styles.facilities__item}
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
        />     
      </div>
    </div>
  );
};

export default Index;
