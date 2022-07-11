import React, { useState, useEffect, useRef } from 'react';
import styles from './_Features.module.scss';
import help from '../../Icons/GI/home-garage (1).svg';
import odometer from '../../Icons/GI/speedometer (1).svg';
import autoRepair from '../../Icons/GI/auto-repair (1).svg';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

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

	const sectionRef = useRef(null);

	useEffect(() => {
		const el = sectionRef.current;

		gsap.fromTo(el, { opacity: 0, y: 200 }, {
			opacity: 1, y: 0, duration: 1, scrollTrigger: {
				trigger: el
			}
		})
	}, []);

	return (
		<section className={styles.firstsection} id="features__section" >
			<div className={`container ${styles.features}`} ref={sectionRef}>
				<div className={`${styles.features__card} col-lg-4 col-md-12 col-sm-12`} >
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
	);
};

export default FirstSection;
