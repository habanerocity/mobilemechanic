import styles from '../Components/UI/ContactForm/_ContactForm.module.scss';

const useDynamicClasses = (hasError, valueIsValid) => {
	const dynamicClass = hasError
		? `${styles.input__error}`
		: valueIsValid ? `${styles.input__success}` : `${styles.inp}`;

	return dynamicClass;
};

export default useDynamicClasses;
