import React, { useState, useEffect } from 'react';
import styles from './_Features.module.scss';
import help from '../../Icons/GI/home-garage (1).svg';
import odometer from '../../Icons/GI/speedometer (1).svg';
import autoRepair from '../../Icons/GI/auto-repair (1).svg';

// import Aos from 'aos';
// import 'aos/dist/aos.css';

const FirstSection = (props) => {
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

	// useEffect(() => {
	// 	Aos.init({ duration: 2000 });
	// }, []);

	return (
		<div
			// data-aos="fade-up" 
			className={styles.firstsection} id="features">
			<section className={`container ${styles.features__container}`}>
				<div className={styles.features}>
					<div className={`${styles.features__card} col-lg-4 col-md-12 col-sm-12`}>
						<img className={styles.features__icons} src={help} alt="help" />
						<h3 className={styles.header}>SIT TIGHT, WE COME TO YOU</h3>
						<p className={styles.features__text}>
							Your car won't start and don't feel like spending all day in a shop? Don't fear, our mobile
							mechanic comes to you and helps you repair or diagnose your vehicle.
						</p>
						<button type="button" onClick={clickHandler} className={styles.findOut}>
							contact us
						</button>
					</div>
					<div className={`${styles.features__card} col-lg-4 col-md-12 col-sm-12`}>
						<img src={autoRepair} alt="auto repair" className={styles.features__icons} />
						<h3 className={styles.header}>DECADES OF EXPERIENCE</h3>
						<p className={styles.features__text}>
							Over 30 years of automotive experience with American, Japanese, and European vehicles. We
							can assist you with a variety of automotive solutions and services.
						</p>
						<button onClick={clickHandler} type="button" className={styles.findOut}>
							contact us
						</button>
					</div>
					<div className={`${styles.features__card} col-lg-4 col-md-12 col-sm-12`}>
						<img className={styles.features__icons} src={odometer} alt="odometer" />
						<h3 className={styles.header}>SATISFACTION GUARANTEED</h3>
						<p className={styles.features__text}>
							Fair pricing and integrity are a part of our core values. You will be impressed by our
							mechanic's service, attention to detail, and breadth of automotive knowledge.
						</p>
						<button onClick={clickHandler} type="button" className={styles.findOut}>
							contact us
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FirstSection;
