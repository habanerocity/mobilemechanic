import styles from './_ModalWindow.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import location from '../../../Icons/GI/position-marker.svg';
import mail from '../../../Icons/GI/envelope.svg';
import phone from '../../../Icons/GI/phone.svg';

import alessio from '../../../Images/alessioedited.webp';
import dadLogo from '../../../Images/7-edited.webp';

import ContactForm from '../ContactForm/ContactForm';

const ModalWindow = (props) => {
	return (
		<React.Fragment>
			<div>
				<div className={styles.backdrop} onClick={props.onConfirm} />
				<div className={styles.modal__window}>
					<div className={styles.flex__row}>
						<div className={styles.modal__branding}>
							<div className={styles.modal__backdrop} />
							<img src={alessio} className={styles.modal__pic} alt="branding" />
							<h1 className={styles.modal__header}>Contact Us</h1>
							<p className={styles.modal__line}>
								Fill out the form and let us know what you need help with.
							</p>
							<div className={styles.phone__container}>
								<div className={styles.phone}>
									<img src={phone} alt="phone" className={styles.phone__icon} /> (626)696-7486
								</div>
								<div className={styles.phone}>
									<img src={mail} alt="email" className={styles.phone__icon} /> lindyernan@gmail.com
								</div>
								<div className={styles.phone}>
									<img src={location} alt="location" className={styles.phone__icon} /> Tarzana,
									California
								</div>
							</div>
							<div className={styles.logo__container}>
								<img src={dadLogo} className={styles.logo} alt="logo" />
							</div>
						</div>
						<ContactForm onConfirm={props.onConfirm} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const ContactModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<ModalWindow onConfirm={props.onConfirm} />, document.getElementById('modal-root'))}
		</React.Fragment>
	);
};

export default ContactModal;
