import Image from 'next/image';
import { AiTwotoneCar } from 'react-icons/ai';
import { FaBuilding, FaShower } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import Featured from '../Featured/Featured';
import styles from './featuredProperties.module.css';
type FeaturedProperties = {
	title: string;
	subtitle: string;
	desc: string;
	img: string;
};

const FeaturedProperties = ({
	title,
	subtitle,
	desc,
	img,
}: FeaturedProperties) => {
	return (
		<div className={styles.container}>
			<Image src={img} alt="Feature" width={300} height={300} />

			<h1 className={styles.title}>{title}</h1>
			<div className={styles.subtitle}>{subtitle}</div>
			<p className={styles.desc}>{desc}</p>
			{/* <div className={styles.facilities}>
				<div className={styles.bathroom}>
					<FaShower size={20} color="orange" />
					<span className={styles.bath}>4</span>
				</div>
				<div className={styles.bedrooms}>
					<MdMeetingRoom size={20} color="orange" />
					<span className={styles.bed}>3</span>
				</div>
				<div className={styles.building}>
					<FaBuilding size={20} color="orange" />
					<span className={styles.build}>2500sq</span>
				</div>
			</div> */}
			<ul className={styles.facilities}>
				<li className={styles.item}>
					<strong>4</strong>
					<FaShower
						size={20}
						color="orange"
						margin-left="2px"
						margin-bottom="-2px"
					/>
					<span className={styles.bath}>Bathrooms</span>
				</li>
				<li className={styles.item}>
					<strong>4</strong>
					<MdMeetingRoom
						size={20}
						color="orange"
						margin-left="2px"
						margin-bottom="-2px"
					/>
					<span className={styles.bed}>Bedrooms</span>
				</li>
				<li className={styles.item}>
					<strong>2500</strong>
					<FaBuilding
						size={20}
						color="orange"
						margin-left="2px"
						margin-bottom="-2px"
					/>
					<span className={styles.build}>Square Ft</span>
				</li>
			</ul>
		</div>
	);
};

export default FeaturedProperties;
