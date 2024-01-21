'use client';
import { clients } from '@/constants/index';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './people.module.css';
const People = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.headline}>
					Our <span>Clients</span> Say!
				</h1>
				<h3 className={styles.company}>A Real Estate Company To Trust</h3>
			</div>

			<Swiper
				className={styles.swiper}
				modules={[Pagination]}
				slidesPerView={3}
				pagination={{ clickable: true }}
				// grabCursor={true}
			>
				{clients.map((client, index) => {
					return (
						<SwiperSlide key={index} className={styles.swiperSlide}>
							<div className={styles.testimonial}>
								<Image
									src={client.img}
									alt="clients"
									height={300}
									width={300}
								/>
								<p>{client.review}</p>
								<div className={styles.bio}>
									<span>{client.name}</span>
									<span>{client.title}</span>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default People;
