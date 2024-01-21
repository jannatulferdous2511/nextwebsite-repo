import Button from '@/components/Button/Button';
import Image from 'next/image';
import business from 'public/business.png';
import familyroom from 'public/familyroom.jpg';
import React from 'react';
import styles from './about.module.css';

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={business} alt="JANNAT" fill={true} className={styles.img} />

				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>
						Handcrafting Award Winning Digital Experiences
					</h2>
				</div>
			</div>

			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who we are</h1>
					<p className={styles.desc}>
						We are very proud to say that we We are very proud to say that we We
						are very proud to say that we
						<br />
						We are very proud to say that we We are very proud to say that we
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>What we do</h1>

					<p className={styles.desc}>
						We are very proud to say that we We are very proud to say that we We
						are very proud to say that we
						<br />
						We are very proud to say that we We are very proud to say that we We
						are very proud to say that we
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
