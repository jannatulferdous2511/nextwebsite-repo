import React from "react";
import styles from "./category.module.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Button from "@/components/Button/Button";
import Image from "next/image";

type PropsType = {
  params: Params;
};
const Category = ({ params }: PropsType) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.Desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/Dining.jpeg" alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.Desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/Dining.jpeg" alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.Desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/dining2.jpeg" alt="" />
        </div>
      </div>


      </div>
      
     
    
  );
};

export default Category;
