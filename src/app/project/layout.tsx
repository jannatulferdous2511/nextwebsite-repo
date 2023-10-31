import React from "react";
import styles from "./project.module.css";

const layout = ({ children }:any) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default layout;
