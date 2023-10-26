import React from 'react';
import styles from './_Footer.module.scss';
import logo from '../../Images/7-edited.webp';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.footer} container`}>
				{/* <div>
					<ul className={styles.content}>
						<li>About</li>
						<li>Contact Us</li>
						<li>Terms of Use</li>
						<li>Private Policy</li>
						<li>Blog</li>
					</ul>
				</div> */}
				<div>
					<img src={logo} alt="logo" className={styles.logo} />
				</div>
				<div className={styles.flex__container}>
					<p className={styles.copyright}> © 2023 Ramirez Mobile Mechanic All Rights Reserved</p>
					<a rel="preconnect" href="https://icons8.com/icon/1731/engine">
						Engine icon by Icons8
					</a>
					<a rel="preconnect" href="https://icons8.com/icon/0s5tdFYK8wN3/brake-discs">
						Brake Discs icon by Icons8
					</a>
					<a rel="preconnect" href="https://fontawesome.com/license">
						Icons from fontawesome
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
