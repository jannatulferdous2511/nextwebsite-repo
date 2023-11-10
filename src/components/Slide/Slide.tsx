import React from "react";
import styles from "./slide.module.css";
import Image from "next/image";

import Button from "@/components/Button/Button";

interface propsType {
  img: string;
  // title: string;
  // mainTitle: string;
}

const Slide: React.FC<propsType> = ({ img  }) => {
  return (
    <div className={styles.slide}>
       {/* <div className={styles.banner}>
        <h3 className={styles.title}>{title}</h3>
        <h2 className={styles.mainTitle}>{mainTitle}</h2>

        <Button url="/project" text="See Our Project" />
      </div>  */}

      <Image
        className={styles.image}
        src={img}
        alt="banner"
        width={550}
        height={550}
      />
    </div>
  );
};

export default Slide;
