# XKCD Explorer

A simplistic XKCD strip explorer application.

## How to Use

In the project directory, you can run:

### `npm install`

Install all dependencies to run and build the project.

### `npm run-script cros`

Runs a simple server to solve the CROS limitation.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Note: you need to use `cros` for the testing project on development and the main URL available on the `src/url` directory

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Architecture


### Base Directories Layout

<pre>
project
│   README.md
└───src
│   └───assets
│   └───config
│   └───data
│   └───features
│   │   └───detail
│   │   └───header
│   │   └───list
│   │   │   └───pagination
│   │   │   └───placeholder
│   │   │   └───thumbnail
│   │   └───not-found
│   └───model
│   └───state
│   └───url
│   └───utils
</pre>

## User Stories

It should be able to show thumbnails for all strips (but not necessarily show all at exactly the same time)

You should be able to explore each strip more closely in some way

## Technical Stories

Use the API described at https://xkcd.com/json.html

Use reusable components

Build your software in such a way that you and your colleagues can build on it and maintain it for a long time to come

Deploy this some place of your choice or describe how you would do so

## Idea to Improve

TODO: Complete documentation
