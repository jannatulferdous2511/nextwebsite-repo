import React from "react";
import styles from "./testimonial.module.css";
import Link from "next/link";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/architecture2.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href="/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/architecture2.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href="" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/architecture2.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Testimonial;
