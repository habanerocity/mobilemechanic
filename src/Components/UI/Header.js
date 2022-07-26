import React, { useContext, useState, useEffect } from 'react';

import Hero from './Hero';
import Button from './Button';
import ModalWindow from './ModalWindow/ModalWindow';
import BtnContext from '../../store/btn-context';
import styles from './_Header.module.scss';

import phone from '../../Icons/GI/phone.svg';

const Header = (props) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [clicked, setClicked] = useState(false);
	const ctx = useContext(BtnContext);

	const handleClose = (signal) => {
		props.onClose(signal);
	};

	const clickHandler = () => {
		setClicked(true);
		props.onConfirm(clicked);
	};

	useEffect(
		() => {
			//lifting state up
			props.onConfirm(clicked);
		},
		[props, clicked]
	);

	const breakPoint = 550;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return (
		<div className={styles.home} id="home">
			{ctx && <ModalWindow onConfirm={handleClose} />}
			<Hero />
			<div className={styles.btn__container}>
				{width > breakPoint ? <Button onConfirm={clickHandler} className={styles.btn}> Get Quote </Button> :
					<div>
						<a href="tel:6266967486">
							<Button className={styles.btn}>
								<img src={phone} alt="phone" className={styles.phone__icon} />Call Now
							</Button>
						</a>
					</div>
				}
			</div>
		</div>
	);
};

export default Header;
