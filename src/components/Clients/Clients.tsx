import styles from 'clients.module.css';
import Image from 'next/image';

type Clients = {
	img: string;
	review: string;
};
const Clients = ({ img, review }: Clients) => {
	return (
		<div className={styles.container}>
			<Image src={img} alt="clients" height={300} width={300} />
			<p className={styles.review}>{review}</p>
		</div>
	);
};

export default Clients;
