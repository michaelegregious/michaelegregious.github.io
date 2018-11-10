## Some notes on this Portfolio Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The additional hitch in this web app is that it requires a special library ([react-gh-pages](https://github.com/gitname/react-gh-pages)), which in our case deploys the built React App to the Master branch of this repository.

### This means that instead of pushing changs to Master, you need to push them to the Source branch.

(Don't worry too much though, because git will holler at you if you try to push to Master.)

When we want to deploy our app, we'll run

### `npm run deploy`

which will then deploy our bundled/packaged React App to github.

Normally, react-gh-pages likes to deploy to a branch called gh-pages (and it does a good job of letting github know to look there for the bundled files). However, for personal pages (i.e. michaelegregious.github.io), github will only deploy from Master. Thus, we needed a workaround. You can read a bit more about that [here](https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka).

To read more about react-gh-pages, look [here](https://github.com/gitname/react-gh-pages).

##OK!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
