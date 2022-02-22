import React from 'react';
import styles from './_DisplayResult.module.scss';
import close from '../../../Icons/FA/times-solid.svg';

const ResultWindow = (props) => {
	return (
		<div className={styles.backdrop} onConfirm={props.onConfirm}>
			<div className={styles.success}>
				<div onClick={props.onConfirm} className={styles.closeBtn__container}>
					<img src={close} className={styles.close} alt="close" />
				</div>
				<div className={styles.flex__container}>
					<p>{props.message}</p>
					<button className={styles.btn} onClick={props.onConfirm}>
						Got It!
						<span />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ResultWindow;
