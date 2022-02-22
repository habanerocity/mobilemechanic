import React from 'react';
import styles from './_Hero.module.scss';
import NavBar from './NavBar/NavBar';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<NavBar />
			<div className={styles.hero__header}>
				<h1 className={styles.header}>Mobile Master Technician That Comes to You</h1>
				<p className={styles.subtext}>
					Get auto solutions straight to your doorstep or office at a fair and affordable price
				</p>
			</div>
		</div>
	);
};

export default Hero;
