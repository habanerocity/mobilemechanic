import React, { useState } from 'react';
import styles from './_Slider.module.scss';
import ReviewData from './SliderData';

import quoteLeft from '../../Icons/FA/quote-left-solid.svg';
import arrowLeft from '../../Icons/RI/arrow-left-circle-fill.svg';
import arrowRight from '../../Icons/RI/arrow-right-circle-fill.svg';

const Slider = () => {
	const [ currentSlide, setCurrentSlide ] = useState(0);

	const nextSlide = () => {
		setCurrentSlide(currentSlide === ReviewData.length - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? ReviewData.length - 1 : currentSlide - 1);
	};

	if (!Array.isArray(ReviewData) || ReviewData.length <= 0) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<div className={`container ${styles.slider}`}>
				<img
					src={arrowLeft}
					alt="left arrow"
					className={`${styles.arrow__left} ${styles.arrow}`}
					onClick={prevSlide}
				/>
				<img
					src={arrowRight}
					alt="right arrow"
					className={`${styles.arrow__right} ${styles.arrow}`}
					onClick={nextSlide}
				/>
				{ReviewData.map((review, index) => {
					return (
						<div className={index === currentSlide ? styles.slide__active : styles.slide} key={review.id}>
							{index === currentSlide && (
								<div className={styles.review__slides}>
									<div className={`${styles.review__content} container`}>
										<div className={styles.quote}>
											<img src={quoteLeft} alt="quote" className={styles.quote__symbol} />
										</div>
										<h2 className={styles.header}>{review.title}</h2>
										<p className={styles.testemonial}>{review.feedback}</p>
										<p
											className={styles.person}
										>{`-${review.name}, ${review.city}, ${review.state}`}</p>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
