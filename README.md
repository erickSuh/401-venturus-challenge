This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Look for [demo](https://venturus-challenge.netlify.app)

## How to develop

Follow the steps:

1 - Clone repository;

2 - Run the commando `npm install` or `yarn install`;

3 - Add the environment variable file;

4 - Run the commando `npm start` or `yarn start`;

5 - Access [http://localhost:3000](http://localhost:3000) and enjoy;

The application has a backend development mock server on this [repository](https://github.com/erickSuh/203-dev-server); 

Note: The application use a dev server and this dev server stop work after 30 minutes. If you first request delay, be cool, it's normal.

## Environment variable file sample

```
CI=true
REACT_APP_API=https://venturus-challenge.netlify.app/.netlify/functions
REACT_APP_SEARCH_FOOTBALL_API=https://api-football-v1.p.rapidapi.com/v2/players/search
REACT_APP_RAPIDAPI_KEY=c31ade96famsh2fcde5d5aea5573p18f855jsn1446cccd0d2e
REACT_APP_API_URL=https://venturus-challenge.herokuapp.com
```

## How to deploy

This application is configured to use [netlify](https://www.netlify.com/) and has a pipeline configured on master branch.

To deploy only do a pull request, on master.

Alternatively you can fallow this steps:

1 - Run `yarn build` or `npm run build`;

2 - Run `yarn deploy:prod` or `npm run deploy:prod`;

3 - Access [application page](https://venturus-challenge.netlify.app);

## How to test

To use unitary test, user `npm run test` or `yarn run test`;

## Available Scripts

In the project directory, you can run:

### `start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
