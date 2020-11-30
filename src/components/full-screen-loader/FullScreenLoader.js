import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './full-screen-loader.scss';

const FullScreenLoader = ({ loading, children }) => {
	const [ containerEl ] = useState(document.createElement('div'));
	useEffect(
		() => {
			document.body.appendChild(containerEl);
			return () => {
				document.body.removeChild(containerEl);
			};
		},
		[ containerEl ]
	);

	let className = 'full-screen-loader';

	if (loading) {
		className += ' loading';
	}

	return ReactDOM.createPortal(
		<div className={className}>
			<div className="loading-element">
				<i className="fas fa-circle-notch" />
				{children}
			</div>
		</div>,
		containerEl
	);
};

export default FullScreenLoader;
