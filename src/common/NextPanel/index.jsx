import React from 'react';

import storageService from '../../services/storage.service';

import './next-panel.scss';

const NextPanel = ({ titleText, nextButtonText, onNext, children }) => {
	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<h1 className="title col-sm-12">{titleText}</h1>
			<hr />
			{children}
			{!storageService.isHost() && (
				<div class="panel-bottom">
					<hr />
					<div>
						<button type="button" className="button button-primary" onClick={onNext}>
							{nextButtonText}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default NextPanel;
