import Image from 'next/image';
import React from 'react';
import styles from './slide.module.css';

import Button from '@/components/Button/Button';

interface propsType {
	img: string;
	title: string;
}

const Slide: React.FC<propsType> = ({ img, title }) => {
	return (
		<div className={styles.slide}>
			<div className={styles.banner}>
				<h2 className={styles.title}> {title}</h2>
			</div>

			<Image
				className={styles.image}
				src={img}
				alt="banner"
				width={2000}
				height={2000}
			/>
		</div>
	);
};

export default Slide;
