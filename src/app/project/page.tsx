import styles from "./project.module.css";
import layout from "./layout";

import React from "react";
import Link from "next/link";

const Project = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Project</h1>
      <div className={styles.items}>
        <Link href="/project/Gulshan" className={styles.item}>
          <span className={styles.title}>Gulshan</span>
        </Link>
        <Link href="/project/Banani" className={styles.item}>
          <span className={styles.title}>Banani</span>
        </Link>
        <Link href="/project/Dhanmondi" className={styles.item}>
          <span className={styles.title}>Dhanmondi</span>
        </Link>
      </div>
    </div>
  );
};

export default Project;
