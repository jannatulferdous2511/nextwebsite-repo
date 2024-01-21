import Banks from '@/components/Banks/Banks';
import FeaturedProperties from '@/components/FeaturedProperties/FeaturedProperties';
import Hero from '@/components/Hero/Hero';

import styles from './page.module.css';

import Featured from '@/components/Featured/Featured';

import Companies from '@/components/Companies/Companies';
import People from '@/components/People/People';
export default function Home() {
	return (
		<main className={styles.container}>
			<Hero />

			{/* <FeaturedHeadline /> */}
			<Featured />
			<Banks />

			<People />

			{/* <ProjectItems/> */}
		</main>
	);
}
