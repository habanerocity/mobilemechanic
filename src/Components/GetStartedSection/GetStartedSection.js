import React, { useState, useEffect } from 'react';
import styles from './_GetStartedSection.module.scss';

import numberOne from '../../Icons/RI/number-1.svg';
import numberTwo from '../../Icons/RI/number-2.svg';
import numberThree from '../../Icons/RI/number-3.svg';

import Button from '../UI/Button';

import computer from '../../Images/data_processing.svg';
import booking from '../../Images/booking.svg';
import navigator from '../../Images/navigator.svg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const GetStartedSection = (props) => {
	const [ clicked, setClicked ] = useState(false);

	const clickHandler = () => {
		setClicked(true);
		props.onConfirm(clicked);
	};

	useEffect(() => {
		Aos.init({
			duration: 2000
		});
	}, []);

	const { onConfirm } = props;

	useEffect(
		() => {
			//lifting state up
			onConfirm(clicked);
		},
		[ clicked, onConfirm ]
	);

	return (
		<section className={styles.grid__container}>
			<h1 className={styles.header}>Getting Started is Simple</h1>
			<div className={`container ${styles.getstarted}`}>
				<div
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration={1300}
					className={`container ${styles.a}`}
				>
					<div>
						<img src={numberOne} alt="one" className={styles.no} />
					</div>
					<p>
						GET A QUOTE <br />
						<br />
						Tell us what's wrong with your vehicle or ask us for a diagnosis. Get a prompt, honest and free
						estimate.
					</p>
				</div>
				<div
					data-aos="fade-left"
					data-aos-offset={500}
					data-aos-duration={1700}
					className={`container ${styles.b}`}
				>
					<img src={computer} alt="computer" />
				</div>
				<div
					data-aos="fade-right"
					data-aos-duration={1700}
					data-aos-offset={500}
					className={`container ${styles.c}`}
				>
					<img src={booking} alt="booking" />
				</div>
				<div data-aos="fade-left" data-aos-duration={1000} className={`container ${styles.d}`}>
					<div>
						<img src={numberTwo} alt="two" className={styles.no} />
					</div>
					<p>
						BOOK YOUR APPOINTMENT <br />
						<br />
						Send us your location, when you're available and wait for us there.
					</p>
				</div>
				<div data-aos="fade-up" data-aos-duration={1700} className={`container ${styles.e}`}>
					<div>
						<img src={numberThree} alt="three" className={styles.no} />
					</div>
					<p>
						GET YOUR VEHICLE REPAIRED <br />
						<br />
						That’s all. No need to spend your day in a dealership or shop, our mechanic comes to you.
					</p>
				</div>
				<div
					data-aos="fade-down"
					data-aos-offset={300}
					data-aos-duration={1700}
					className={`container ${styles.f}`}
				>
					<img src={navigator} alt="driver" />
				</div>
			</div>
			<div className={styles.btn__container}>
				<Button onConfirm={clickHandler}>Get Quote</Button>
			</div>
		</section>
	);
};

export default GetStartedSection;
