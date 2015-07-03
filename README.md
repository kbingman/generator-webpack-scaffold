# Webpack Scaffold

A basic webpack setup with LibSASS and Mocha / Karma tests.

## Installation

First be sure Yeoman is installed.

    npm install -g yo

This module not yet published to NPM, so in order to install it you will need to check out the Github Repository. Then within that directory run the command

    npm link

You should now have the webpack generator installed.

Create a directory where you want to use your new project, then simply run

    yo webpack-scaffold

The generator will install all the required node modules. In order to run your new project with `serve`, simply type

    npm start

Available scripts:

    npm start
    npm test

    npm run build
    npm run build:js
    npm run build:css
    npm run watch
    npm run watch:js
    npm run watch:css
