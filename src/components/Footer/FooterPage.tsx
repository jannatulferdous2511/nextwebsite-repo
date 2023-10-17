import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const FooterPage = () => {
  return (
    <div className={styles.container}>
      <div>@2023 JANNAT jannat. All Rigts Reserved.</div>
      <div className={styles.social}>
        <Image
          src="/edit size.jpg"
          height={40}
          width={40}
          className={styles.icon}
          alt="JANNAT"
        />
        <Image
          src="/facebook icon.jpg"
          height={40}
          width={40}
          className={styles.icon}
          alt="JANNAT"
        />
        <Image
          src="/facebook icon.jpg"
          height={40}
          width={40}
          className={styles.icon}
          alt="JANNAT"
        />
        <Image
          src="/golden icon.jpg"
          height={40}
          width={40}
          className={styles.icon}
          alt="JANNAT"
        />
        <Image
          src="/golden tw icon.jpg"
          height={40}
          width={40}
          className={styles.icon}
          alt="JANNAT"
        />
      </div>
    </div>
  );
};

export default FooterPage;
