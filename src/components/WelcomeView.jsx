import React from 'react';
import AgreePanel from '../common/AgreePanel';
import NextPanel from '../common/NextPanel';

const WelcomeView = ({ room, onNext }) => {
	return (
		<NextPanel titleText="Welcome" nextButtonText="Start Game" onNext={onNext}>
			<p>You are about to play a game of "The Mole".</p>
			<p>
				In this game, you will work together as a team to complete a series of challenges. For every challenge
				you win, you will add points to a group pot that in the end will be awarded to only one of you. At the
				beginning of the game, one of you will randomly be selected to be "The Mole" and it will be that
				player's objective to stop you from winning points by sabotaging your efforts all while keeping their
				identity a secret.
			</p>
			<p>
				The game is played in rounds called "episodes" where in each "episode" you will work together to
				complete a number of challenges. You will have the ability to win points in some challenges while in
				others, you will have the chance to win something else that may be of personal benefit. At the same
				time, the mole will be trying to sabotage each challenge so, as a player, you will want to be on the
				lookout for suspicious behaviour.
			</p>
			<p>
				At the end of each episode you will each take a ten question multiple choice quiz about the identity of
				the mole. The quiz will have questions like "How tall is the mole?" and "What role did the mole have
				during a certain challenge?". The player who gets the fewest questions correct will be eliminated from
				the game so not only is it important to work well together to win points but it is also important to
				keep track of your fellow players as anyone of them could be the mole.
			</p>
			<p>
				The reason for winning points is because, in the final episode, the last remaining player will play a
				final challenge against the mole. The more points that the players won throughout the game, the better
				of a chance the last remaining player will have at winning that challenge.
			</p>
			<p>One piece of advice before beginning the game: "Trust Nobody".</p>

			<AgreePanel room={room} />
		</NextPanel>
	);
};

export default WelcomeView;
