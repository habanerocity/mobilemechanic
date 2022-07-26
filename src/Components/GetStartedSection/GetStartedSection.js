import React, { useState, useEffect, useRef } from 'react';
import styles from './_GetStartedSection.module.scss';

import numberOne from '../../Icons/RI/number-1.svg';
import numberTwo from '../../Icons/RI/number-2.svg';
import numberThree from '../../Icons/RI/number-3.svg';

import Button from '../UI/Button';

import computer from '../../Images/data_processing.svg';
import booking from '../../Images/booking.svg';
import navigator from '../../Images/navigator.svg';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const GetStartedSection = (props) => {
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
		[onConfirm, clicked]
	);

	const stepOneRef = useRef(null);
	const stepOnePicRef = useRef(null);
	const stepTwoPicRef = useRef(null);
	const stepTwoRef = useRef(null);
	const stepThreeRef = useRef(null);
	const stepThreePicRef = useRef(null);

	useEffect(
		() => {
			const stepOne = stepOneRef.current;
			const stepOnePic = stepOnePicRef.current;
			const stepTwoPic = stepTwoPicRef.current;
			const stepTwo = stepTwoRef.current;
			const stepThree = stepThreeRef.current;
			const stepThreePic = stepThreePicRef.current;

			gsap.fromTo(stepOne, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0, duration: 1, scrollTrigger: {
					trigger: stepOne
				}
			})

			gsap.fromTo(stepOnePic, { opacity: 0, x: 200 }, {
				opacity: 1, x: 0, duration: 1, scrollTrigger: {
					trigger: stepOnePic,
					start: "bottom bottom"
				}
			}).delay(3)

			gsap.fromTo(stepTwoPic, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0, duration: 1, scrollTrigger: {
					trigger: stepTwoPic,
					start: "bottom bottom"
				}
			}).delay(3)

			gsap.fromTo(stepTwo, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0, duration: 1, scrollTrigger: {
					trigger: stepTwo
				}
			})

			gsap.fromTo(stepThree, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0, duration: 2, scrollTrigger: {
					trigger: stepThree,
				}
			})

			gsap.fromTo(stepThreePic, { opacity: 0, scale: 0 }, {
				opacity: 1, duration: 1, scale: 1, scrollTrigger: {
					trigger: stepThreePic,
					start: "bottom center"

				}
			}).delay(1)
		},
		[]
	);

	return (
		<section className={styles.grid__container}>
			<div className="container"><h1 className={styles.header}>Getting Started is Simple</h1></div>

			<div className={`container ${styles.getstarted}`}>
				<div
					ref={stepOneRef}
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
					ref={stepOnePicRef}
					className={`container ${styles.b}`}
				>
					<img src={computer} alt="computer" />
				</div>
				<div
					ref={stepTwoPicRef}
					// data-aos="fade-right"
					// data-aos-duration={1700}
					// data-aos-offset={500}
					className={`container ${styles.c}`}
				>
					<img src={booking} alt="booking" />
				</div>
				<div
					// data-aos="fade-left"
					// data-aos-duration={1000}
					ref={stepTwoRef}
					className={`container ${styles.d}`}>
					<div>
						<img src={numberTwo} alt="two" className={styles.no} />
					</div>
					<p>
						BOOK YOUR APPOINTMENT <br />
						<br />
						Send us your location, when you're available and wait for us there.
					</p>
				</div>
				<div
					ref={stepThreeRef}
					// data-aos="fade-up"
					//  data-aos-duration={1700}
					className={`container ${styles.e}`}>
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
					ref={stepThreePicRef}
					className={`container ${styles.f}`}
				>
					<img src={navigator} alt="driver" />
				</div>
			</div>
			<div className={styles.btn__container}>
				<Button onConfirm={clickHandler}>Get Quote</Button>
			</div>
		</section>
	)
};

export default GetStartedSection;
