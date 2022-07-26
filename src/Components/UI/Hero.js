import React from 'react';
import styles from './_Hero.module.scss';
import NavBar from './NavBar/NavBar';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<NavBar />
			<div className={styles.hero__header}>
				<h1 className={styles.header}>35+ Years of Automotive Excellence Right at Your Doorstep</h1>
				<p className={styles.subtext}>
					San Fernando Valley Mobile Mechanic
				</p>
			</div>
		</div>
	);
};

export default Hero;
