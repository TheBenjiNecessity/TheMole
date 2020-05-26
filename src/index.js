import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

ReactDOM.render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * => Home
 * - user chooses host game:
 *      - request made to server to generate room code
 *      - room code returned
 *      - move to host lobby
 *      
 * 
 * => Host Lobby
 *      - set up socket listener to listen for players entering
 *      - set up socket listener to listen for play
 * 
 * => Host Game
 * 
 */