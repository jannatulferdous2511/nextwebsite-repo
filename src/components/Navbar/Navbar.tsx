"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "About",
    url: "/about",
  },

  {
    id: 3,
    title: "ProjectPage",
    url: "/ProjectPage",
  },

  { id: 4, title: "TestimonialPage", url: "/testimonialPage" },

  { id: 5, title: "Contact", url: "/contact" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoImage}>
        <Link href="/" className={styles.logo}>
          JANNAT
        </Link>
        <Image
          src="/edit size.jpg"
          height={40}
          width={40}
          className={styles.icon}
          alt="JANNAT"
        />
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
