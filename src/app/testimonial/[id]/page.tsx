import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Banani Project</h1>
          <p className={styles.desc}>
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
            Our Beautiful Project At Banani. Our Beautiful Project At Banani.
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>JOHN</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Bella Vista.jpg"
            alt=""
            fill="true"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          Banani is the perfect location. Banani is the perfect location. Banani
          is the perfect location. Banani is the perfect location.Banani is the perfect location. Banani is the perfect location. Banani
          is the perfect location. Banani is the perfect location.
          <br />
          Banani is the perfect location. Banani is the perfect location. Banani
          is the perfect location. Banani is the perfect location.Banani is the perfect location. Banani is the perfect location. Banani
          is the perfect location. Banani is the perfect location.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
