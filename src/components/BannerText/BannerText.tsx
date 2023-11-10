import React from "react";
import Container from "@/components/Container/Container";
import { motion } from "framer-motion";
import styles from "./bannerText.module.css";
import Button from "@/components/Button/Button";

interface Props {
  title: string;
}

const BannerText = ({ title }: Props) => {
  return (
    <div className={styles.text}>
      <Container className={styles.container}>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.h2}
        >
          {title}
        </motion.h2>
        <motion.h4
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.h4}
        >
          Large LakeView Bedroom
        </motion.h4>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={styles.button}
        >
           <Button url="/project" text="See Our Project" />
          <Button url="/contact" text="Contact Us" />
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;
