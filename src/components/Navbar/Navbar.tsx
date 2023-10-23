import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: "2",
    title: "About",
    url: "/about",
  },

  {
    id: 3,
    title: "ProjectPage",
    url: "/projectpage",
  },
  { id: 4, title: "TestimonialPage", url: "/testimonialpage" },
  { id: 5, title: "ContactPage", url: "/contactpage" },
];

const Navbar = () => {
  return (
    <div className={styles.link}>
      <Link href="/">JANNAT</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
