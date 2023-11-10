"use client";

import React from "react";
import styles from "./hero.module.css";
import Slider from "react-slick";

import Slide from "@/components/Slide/Slide";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "../BannerText/BannerText";

const Hero = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div className={styles.arrow2} onClick={onClick}>
        <PiCaretRightLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className={styles.arrow1} onClick={onClick}>
        <PiCaretLeftLight />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 2000,

    arrows: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  //  const slideData = [
  //   {
  //     id: 0,
  //     img: "/bedroom.jpg",

  //   },

  //   {
  //     id: 1,
  //     img: "/Dining.jpeg",

  //   },

  //   {
  //     id: 2,
  //     img: "/dining2.jpeg",

  //   },
  //   {
  //     id: 3,
  //     img: "/familyroom.jpg",

  //   },
  //   {
  //     id: 4,
  //     img: "/kitchen.jpg",
  //     title: "Suitable kitchen",
  //     mainTitle: "Kitchen",
  //   },
  // ];

  return (
    <div className={styles.relative}>
      <Slider {...settings}>
        <div className={styles.relative}>
          <Image src="/bedroom.jpg" alt="Hero" height={500} width={1000} />
          <BannerText title="Better Design For Your Dream House" />
        </div>

        {/* {slideData.map((item) => (
              <Slide
                key={item.id}
                img={item.img}
              
               />
               
            ))}  */}

        <div className={styles.relative}>
          <Image
            src="/bedroom.jpg"
            alt="Hero"
            height={500}
            width={1000}
            className={styles.image}
          />

          <BannerText title="Better Design For Your dream House" />
        </div>

        <div className={styles.relative}>
          <Image
            src="/Dining.jpeg"
            alt="Hero"
            height={500}
            width={1000}
            className={styles.image}
          />

          <BannerText title="Better Design For Your dream House" />
        </div>
        <div className={styles.relative}>
          <Image
            src="/kitchen.jpg"
            alt="Hero"
            height={500}
            width={1000}
            className={styles.image}
          />

          <BannerText title="Better Design For Your dream House" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
