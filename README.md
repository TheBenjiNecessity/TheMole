This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Pages:
Login page: The page is really a landing page where a player hasn't entered a game yet
 - room code
 - player name
 - submit button (play)

 Game room:
 - (start): wait for other players. Up to ten slots to be filled. Start button at bottom.
 - each player is prompted to enter personal information (just things like height and eye color and whatnot)

 Game start (after start is clicked):
 - Every player sees a screen that shows the basic rules of the entire game. Start button at bottom.
 - Once everyone is in, the first game starts.

 Game (Game is broken up into episodes):
 - Episode (Each episode is broken up into rounds (assignments) with a quiz at the end)
 -     Each Assignment starts with and explanation that shows for a short amount of time
 -     The assignment is played (different assignments progess differently)
 -     After the last assignment, the quiz is played.
 -     Each player is presented with their own quiz start screen with a start button.
 -     The quiz is a series of 20 questions (20 pages with one question each). Clicking on the answer button for each question takes the player to the next question.
 -     Clicking on the answer to the 20th question takes the player to the question finished screen. This screen will show the player that other players are still answering questions.
 -      Once the last player is finished, the page will move to the quiz results screen.
 -      The results page will show text describing what is going to happen for an amount of time before going to the results page.
 -      The result of each player's quiz will show one at a time in a random order.
 -          The player's name will appear on the screen as if being typed in and after a few seconds, the result will show (an all red screen or all green showing that the player is through or executed)
 -          if the players see a green screen then it goes to the next player
 -          if the players see a red screen then it will pause for a few moments before going to a page that tells the players that that player is elliminated. There will be an ok button that everyone must click before going to the next episode.

 - What about the final three?

 Notes and Questions:
 - Should there be a host? A person that administrates or can anyone start the game, etc...?
