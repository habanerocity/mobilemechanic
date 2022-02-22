import React from 'react';
import styles from './_Button.module.scss';

const Button = (props) => {
	return (
		<button
			onClick={props.onConfirm}
			className={`${props.className} ${styles.btn}`}
			type={props.type}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
