'use client';

import Slider from 'react-slick';
// import Slide from '../Slide/Slide';
import styles from './hero.module.css';

import Image from 'next/image';
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';
import BannerText from '../BannerText/BannerText';

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
		// autoplay: true,
		// pauseOnHover: true,
		// speed: 2000,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,

		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className={styles.container}>
			<Slider {...settings}>
				<div className={styles.wrapper}>
					<Image
						src="/bedroom.jpg"
						alt="Hero"
						height={1000}
						width={1000}
						className={styles.image}
					/>

					<BannerText title="Better Design For Our dream House" />
				</div>
				<div className={styles.wrapper}>
					<Image
						src="/Dining.jpeg"
						alt="Hero"
						height={1000}
						width={1000}
						className={styles.image}
					/>

					<BannerText title="Better Design For Your dream House" />
				</div>
				<div className={styles.wrapper}>
					<Image
						src="/dining2.jpeg"
						alt="Hero"
						height={1000}
						width={1000}
						className={styles.image}
					/>

					<BannerText title="Better Design For Your dream House" />
				</div>

				<div className={styles.wrapper}>
					<Image
						src="/kitchen.jpg"
						alt="Hero"
						height={1000}
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
