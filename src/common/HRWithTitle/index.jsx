import React from 'react';

import './hr-with-title.scss';

const HRWithTitle = ({ className, vertical, children }) => {
	let containerClass = 'hr-container';

	if (className) {
		containerClass += ' ' + className;
	}

	if (vertical) {
		containerClass += ' vertical';
	}

	return (
		<div className={containerClass}>
			<div className="hr-left">
				<hr />
			</div>
			<div className="hr-center">{children}</div>
			<div className="hr-right">
				<hr />
			</div>
		</div>
	);
};

export default HRWithTitle;
