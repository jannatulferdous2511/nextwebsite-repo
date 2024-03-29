import Footer from '@/components/Footer/FooterPage';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'JANNAT WEBSITE2',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div>
					<Layout>
						<Navbar />
						{children}
						<Footer />
					</Layout>
				</div>
			</body>
		</html>
	);
}
