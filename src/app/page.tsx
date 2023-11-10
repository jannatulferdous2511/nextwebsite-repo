import Image from "next/image";
import styles from "./page.module.css";
// import Hero from "public/bedroom.jpg";
// import Button from "@/components/Button/Button";
import Hero from "@/components/Hero/Hero";
// import Slide from "@/components/Slide/Slide"

export default function Home() {
  return (
    // <div className={styles.maincontainer}>
    // <div className={styles.container}>
    //   <div className={styles.item}>
    //     <h1 className={styles.title}>Better Design For Your dream House</h1>
    //     <p className={styles.desc}>
    //       Turning Your Idea Into Reality.We Bring Together The Team From The
    //       Global tech Industry
    //     </p>
    //     <Button  url="/ProjectPage" text="See Our Works" />
    //   </div>

    //   <div className={styles.item}>
    //     <Image src={Hero} className={styles.image} alt="Jannat" />
    //   </div>

    // </div>
    // <div className={styles.professionals}>OUR PROFESSIONALS</div>
    // </div>

    <main className={styles.container}>
      <Hero />

      <div className={styles.partner}>Our Valuable Partner
 </div>
      <div className={styles.logo}>
      <Image
      className={styles.img}
      src="/logo 3.jpg"
      alt="Jannat"
      width={50}
      height={50}
      />
      
      <Image
      className={styles.img}
      src="/logo 3.jpg"
      alt="Jannat"
      width={50}
      height={50}
      />
      
      <Image
      className={styles.img}
      src="/logo 3.jpg"
      alt="Jannat"
      width={50}
      height={50}
      />
      </div>
    </main>
  );
}
