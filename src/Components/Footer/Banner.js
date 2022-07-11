import React, { useState, useEffect } from 'react';
import styles from './_Banner.module.scss';

import location from '../../Icons/GI/position-marker.svg';

const Banner = (props) => {
	const [clicked, setClicked] = useState(false);

	const clickHandler = () => {
		setClicked(true);
		props.onConfirm(clicked);
	};

	const { onConfirm } = props;

	useEffect(
		() => {
			//lifting state up
			onConfirm(clicked);
		},
		[clicked, onConfirm]
	);

	return (
		<section id="contact" className={styles.wrapper}>
			<div className={`${styles.banner} container`}>
				<div className={styles.quote}>Ready for a Quote?</div>
				<div className={styles.line}>Service is available 7 days a week:</div>
				<div className={styles.line}>Monday - Sunday 8 AM - 6 PM PST</div>
				<div className={styles.details}>
					1-626-696-7486 <br />
					lindyernan@gmail.com <br />
					<img src={location} alt="location" className={styles.marker} /> Tarzana, CA
				</div>
				<div className={styles.btn__container}>
					<button onClick={clickHandler} className={styles.btn}>
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
};

export default Banner;
