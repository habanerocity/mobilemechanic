import React, { useContext } from 'react';

import Hero from './Hero';
import Button from './Button';
import ModalWindow from './ModalWindow/ModalWindow';
import BtnContext from '../../store/btn-context';
import styles from './_Header.module.scss';

import phone from '../../Icons/GI/phone.svg';

const Header = (props) => {
	const ctx = useContext(BtnContext);

	const handleClose = (signal) => {
		props.onClose(signal);
	};

	return (
		<div className={styles.home} id="home">
			{ctx && <ModalWindow onConfirm={handleClose} />}
			<Hero />
			<div className={styles.btn__container}>
				<a href="tel:16266967486">
					<Button className={styles.btn}>
						<img src={phone} alt="phone" className={styles.phone__icon} />Call Now
					</Button>
				</a>
			</div>
		</div>
	);
};

export default Header;
