import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/bedroom.jpg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design For Your dream House</h1>
        <p className={styles.desc}>
          Turning Your Idea Into Reality.We Bring Together The Team From The
          Global tech Industry
        </p>
        <Button url="/ProjectPage" text="See Our Works" />
      </div>

      <div className={styles.item}>
        <Image src={Hero} className={styles.image} alt="Jannat" />
      </div>
    </div>
  );
}
