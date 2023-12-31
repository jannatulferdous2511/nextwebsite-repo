import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }:any) => {
  return (
    <Link href={url}>
      <button className={styles.btnContainer}>{text}</button>
    </Link>
  );
};

export default Button;
