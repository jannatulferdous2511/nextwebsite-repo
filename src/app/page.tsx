import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/bedroom.jpg";

import ContactPage from "./ContactPage/ContactPage";
import AboutPage from "./About/page";
import ProjectPage from "./ProjectPage/ProjectPage";
import TestimonialPage from "./Testimonial/TestimonialPage";

export default function Home() {
  return (
    //  <main className={styles.main}>
    //   <div className={styles.description}>
    // <AboutPage />
    //     <ProjectPage />
    //     <TestimonialPage />
    //     <ContactPage />
    //   </div> 
    //  </main>

    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design For Your dream House</h1>
        <p className={styles.desc}>
          Turning Your Idea Into Reality.We Bring Together The Team From The
          Global tech Industry
        </p>
        <button className={styles.button}>See Our Projects</button>
        <button className={styles.button}>See Our Projects</button>
      </div>

      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="Jannat" />
      </div>
    </div>
  );
}
