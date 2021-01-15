import React, { Fragment } from 'react';

import storageService from '../../services/storage.service';

import './next-panel.scss';

const NextPanel = ({ titleText, nextButtonText, onNext, children }) => {
	return (
		<Fragment>
			<div className="panel centered-panel centered-panel-medium next-panel">
				<h1 className="title col-sm-12">{titleText}</h1>
				<hr />
				{children}
			</div>
			{!storageService.isHost() && (
				<div className="panel centered-panel centered-panel-medium bottom-panel">
					<hr />
					<button type="button" className="button button-primary centered" onClick={onNext}>
						{nextButtonText}
					</button>
				</div>
			)}
		</Fragment>
	);
};

export default NextPanel;
