import React from 'react';
import ReactDOM from 'react-dom';
import ResultWindow from './ResultWindow';

const DisplayResult = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<ResultWindow
					message="Thanks for your submission! We will get back to you promptly!"
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('success-root')
			)}
		</React.Fragment>
	);
};

export default DisplayResult;
