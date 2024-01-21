import Image from 'next/image';
import styles from './banks.module.css';
const bankData = [
	{
		id: 0,
		img: '/logo 3.jpg',
	},
	{
		id: 1,
		img: '/logo4.jpg',
	},
	{
		id: 2,
		img: '/logo5.jpeg',
	},
	{
		id: 3,
		img: '/logo 3.jpg',
	},
];
interface Props {
	id: string;
	img: string;
}
const Banks = ({ id, img }: Props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.headline}>Our Valueable Partners</h1>
			<div className={styles.wrapper}>
				{bankData.map((item) => (
					<Image
						key={item.id}
						src={item.img}
						alt="Banks"
						className={styles.img}
						height={90}
						width={90}
					/>
				))}
			</div>
		</div>
	);
};

export default Banks;
