import React from 'react';

import './nav-bar.scss';

const NavBar = ({ title }) => {
	return (
		<nav className="nav-bar panel panel-primary">
			<div className="left-column" />
			<div className="title center-column">{title}</div>
			<div className="right-column">
				<button className="button icon-button icon-button-light menu-button">
					<i className="material-icons menu">menu</i>
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
