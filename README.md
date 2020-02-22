# Customers
Search form that queries the [Customer Server](https://github.com/vincelawdev/CustomerServer).

This project was forked from [Company](https://github.com/vincelawdev/Company), which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app has been deployed to Heroku and it can be viewed at: [https://vince-customers.herokuapp.com/](https://vince-customers.herokuapp.com/)

The directory structure follows a similar style to [React Boilerplate's](https://github.com/react-boilerplate/react-boilerplate/tree/master/app) directory structure.

[Redux Toolkit](https://redux-toolkit.js.org/) was used to simplify the Redux setup process.

[React Hooks](https://reactjs.org/docs/hooks-intro.html) and [Redux Hooks](https://react-redux.js.org/next/api/hooks) were used to simplify the Redux binding code and promote the use of functional components over class components.

# Installation

Git clone this repository and run the following command.

### `yarn install` or `npm install`

This project's packages were added with [yarn](https://yarnpkg.com/en/) and there is a `yarn.lock` file.

# Available Scripts

In the project directory, you can run the following scripts.

## Local Environment

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Unit Testing

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage` or `npm run test:coverage`

Generates a test coverage report in the `coverage` folder.

## Builds

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Linting

### `yarn lint:js` or `npm run lint:js`

Runs ESLint on all Javascript files in the `src` folder.

### `yarn lint:js:fix` or `npm run lint:js:fix`

Runs ESLint automatic fixer on all Javascript files in the `src` folder.

### `yarn lint:css` or `npm run lint:css`

Runs stylelint on all files in the `src` folder.

### `yarn lint:css:fix` or `npm run lint:css:fix`

Runs stylelint automatic fixer on all files in the `src` folder.