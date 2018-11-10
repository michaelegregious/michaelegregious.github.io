## Some notes on this Portfolio Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The additional hitch in this web app is that it requires a special library ([react-gh-pages](https://github.com/gitname/react-gh-pages)), which in our case deploys the built React App to the Master branch of this repository (from which gihub serves it up).

### This means that instead of pushing changes to Master, you need to push them to the Source branch.

(Don't worry too much though, because git will holler at you if you try to push to Master.)

When we want to deploy our app, we'll run

### `npm run deploy`

which will then deploy our bundled/packaged React App to github.

Normally, react-gh-pages first magically creates and then subsequently deploys to a branch called gh-pages (and it does a good job of letting github know to look there for the bundled files). However, for personal pages (i.e. michaelegregious.github.io), github will only deploy from Master. Thus, we needed a workaround. You can read a bit more about that [here](https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka).

To read more about react-gh-pages, look [here](https://github.com/gitname/react-gh-pages).

##OK!

Let me know if you have any questions.
