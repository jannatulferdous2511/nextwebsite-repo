import { featuredProperties } from '@/constants/index';
import Image from 'next/image';
import Button from '../Button/Button';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties';
import styles from './featured.module.css';

const Featured = () => {
	return (
		<div className={styles.container}>
			{/* <div className={styles.wrapper}> */}
			<h1 className={styles.text}>Discover Our Featured Projects</h1>
			<p className={styles.subtext}>A Selection Of Our Best Properties</p>
			<div className={styles.wrapper}>
				{featuredProperties.map((item) => (
					<FeaturedProperties
						key={item.id}
						title={item.title}
						subtitle={item.subtitle}
						desc={item.desc}
						img={item.img}
					/>
				))}
			</div>
			<div className={styles.button}>
				<Button url="/project" text="See Our Project" />
			</div>
		</div>
	);
};

export default Featured;
