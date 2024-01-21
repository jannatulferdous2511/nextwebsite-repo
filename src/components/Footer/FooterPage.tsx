'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';
const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},

	{
		id: 2,
		title: 'About',
		url: '/about',
	},

	{
		id: 3,
		title: 'Project',
		url: '/project',
	},

	{
		id: 4,
		title: 'Testimonial',
		url: '/testimonial',
	},

	{ id: 5, title: 'Contact', url: '/contact' },
];

const FooterPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.logo}>
					<div>@2023 JANNAT</div>
					<div>
						<Image
							src="/edit size.jpg"
							height={40}
							width={40}
							className={styles.icon}
							alt="JANNAT"
						/>
					</div>
					<br />
					<p> All Rights Reserved.</p>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.contact}>Contact Us</h2>
					<div className={styles.sundayText}>
						<p className={styles.Sunday}>Sunday - Thursday </p>
						<p className={styles.sundayTime}>8am-5pm</p>
					</div>
					<div className={styles.saturdayText}>
						<p className={styles.saturday}>Saturday</p>
						<p className={styles.saturdayTime}> 8am-5pm</p>
					</div>
					<p className={styles.friday}> Friday Closed</p>
					<p className={styles.address}>
						+8802-41080681 Bari Momen's Heights, Plot -157, Road-12, Block- E,
						Banani, Dhaka,1213
						<br />
						<div className={styles.directions}>Get Directions</div>
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.links}>Useful Links</h2>
					<p className={styles.name}>
						{links.map((link) => (
							<Link key={link.id} href={link.url} className={styles.link}>
								{link.title}
							</Link>
						))}
					</p>
				</div>

				<div className={styles.card}>
					<h2 className={styles.social}>Find Us Here</h2>
					<div className={styles.socialImg}>
						<Image
							src="/facebook icon.jpg"
							height={40}
							width={40}
							className={styles.icon}
							alt="JANNAT"
						/>
						<Image
							src="/facebook icon.jpg"
							height={40}
							width={40}
							className={styles.icon}
							alt="JANNAT"
						/>
						<Image
							src="/golden icon.jpg"
							height={40}
							width={40}
							className={styles.icon}
							alt="JANNAT"
						/>
						<Image
							src="/golden tw icon.jpg"
							height={40}
							width={40}
							className={styles.icon}
							alt="JANNAT"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterPage;
