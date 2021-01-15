import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import NavBar from '../common/NavBar';

import roomService from '../services/room.service';
import errorsService from '../services/errors.service';

import HRWithTitle from '../common/HRWithTitle';
import FullScreenLoader from '../common/FullScreenLoader';
import storageService from '../services/storage.service';

/**
 * Summary: The first view that the user sees when opening the page.
 *
 * Description:
 *      Whenever the user first comes to the site, they are greeted with this
 * page. This page has a simple form that gives the user the ability to generate
 * a room for other players to join or for the player to join another room
 * already created by supplying a roomcode.
 */
const Home = () => {
	const [ form, setForm ] = useState({ playerName: '', roomcode: '' });
	let [ loading, setLoading ] = useState(false);
	let [ toGame, setToGame ] = useState(false);

	const { t } = useTranslation('common');

	useEffect(() => {
		storageService.clearValues();
	}, []);

	function onPlay() {
		//TODO: useCallback
		let errorMessages = 'Errors:\n';
		if (!form.playerName || form.playerName === '') {
			errorMessages += 'You must enter a name.\n';
		}

		if (!form.roomcode || form.roomcode === '') {
			errorMessages += 'You must enter a room code.\n';
		}

		if (errorMessages && errorMessages !== 'Errors:\n') {
			alert(errorMessages);
		} else {
			setLoading(true);
			roomService
				.joinRoom(form.roomcode, { name: form.playerName })
				.then(() => {
					setToGame(true);
				})
				.catch((error) => {
					if (error.errors) {
						let errorMessages = errorsService.getErrorMessages(error.errors);
						alert(errorMessages);
					} else {
						let errorMessage = error.error ? error.error : error.message;
						alert(errorMessage);
					}
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}

	function onHost() {
		setLoading(true);
		roomService
			.createRoom()
			.then((roomcode) => {
				setLoading(false);
				setForm({ ...form, roomcode: roomcode });
				setToGame(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	function onFormChange({ target }) {
		const { name, value, type, checked } = target;
		const val = type === 'checkbox' ? checked : value;

		setForm({ ...form, [name]: val });
	}

	if (toGame && !(!form.roomcode || form.roomcode === '')) {
		return <Redirect to="/Game" />;
	}

	return (
		<div className="main">
			<NavBar title="The Mole" />
			<div className="panel centered-panel centered-panel-medium">
				<form>
					<div className="form-group pl-xs-0 pr-xs-0 mt-0">
						<label htmlFor="name">Player Name:</label>
						<input
							type="text"
							className="form-control"
							name="playerName"
							onChange={onFormChange}
							value={form.playerName}
						/>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0">
						<label htmlFor="roomcode">Room Code:</label>
						<input
							type="text"
							className="form-control"
							name="roomcode"
							onChange={onFormChange}
							value={form.roomcode}
						/>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
						<button type="button" className="button button-primary" onClick={onPlay}>
							Play
						</button>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
						<HRWithTitle>{t('or')}</HRWithTitle>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
						<button type="button" className="button button-primary" onClick={onHost}>
							Host Room
						</button>
					</div>
				</form>
			</div>
			<FullScreenLoader loading={loading}>Loading</FullScreenLoader>
		</div>
	);
};

export default Home;
