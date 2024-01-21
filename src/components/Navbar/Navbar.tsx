'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';

import DarkMode from '@/components/DarkMode/DarkMode';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';
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

const Navbar = () => {
	const { data: session } = useSession();

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.logoImage}>
					<Link href="/" className={styles.logo}>
						JANNAT
					</Link>
					<Image
						src="/edit size.jpg"
						height={40}
						width={40}
						className={styles.icon}
						alt="JANNAT"
					/>
				</div>
				<div className={styles.links}>
					<DarkMode />
					{links.map((link) => (
						<Link key={link.id} href={link.url} className={styles.link}>
							{link.title}
						</Link>
					))}

					{!session && (
						<button className={styles.login} onClick={() => signIn()}>
							LogIn
						</button>
					)}

					{session && (
						<button className={styles.logout} onClick={() => signOut()}>
							<FiLogOut />
							<p>LogOut</p>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
