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

    * List with pagination based on the total numbers.
    * Thumbnail view with image title and ID.

You should be able to explore each strip more closely in some way.

    * Detail page with all available data on the result.
    * Direct navigation in detail page.

## Technical Stories

Use the API described at <https://xkcd.com/json.html>

    * It has one general request that we used to get the total from `num` field.
    * Request with the `ID` to get a specific detail.

Use reusable components

    * Thumbnail
    * Placeholders
    * Pagination
    * Header
    * Detail
    * etc.

Build your software in such a way that you and your colleagues can build on it and maintain it for a long time to come

    * Component base
    * Documentation
    * Clean Code
    * Comments
    * Typescript
    * TODO : Tests

Deploy this some place of your choice or describe how you would do so

    * How to run help
    * Heroku server

## Idea to Improve

Add `I did no catch the drift!` button that uses a website that describes all strips with more information but with the same `ID` as we have used in the project. <https://www.explainxkcd.com/>

## Styling Documentation

I have used the Tailwind for styling; you can find more details on <https://tailwindcss.com/docs> about any CSS method and how to implement it with Tailwind. I promise this is straightforward, and it is an API for your design system that helps you make a great design system.

For some cases, based on the tailwind documentation, you should add some config on the `tailwind.config.js` to activate that.

## Lazy Loading

I have used the lazy loading method for React route and also with the help of a simple Hook for thumbnail images.
When you load the page, you only get a list chunk of code, and when you want to open detail, you request and get the detail chunk. With the help of Webpack, we can manage the chunk name with simple comment text on the definition, as you can see on the `App.tsx` with the keyword `webpackChunkName`.

## User Experiences (UX)

One of the essential concepts of user experience is to make users ready for the data they suppose to get from our web page. With placeholders' help, we can convey a more immeasurable sense to the user and make the waiting process satisfactory.
I have used this method for both list items and detail page.

The other vital factor is about being responsive and accessible on different devices. With the Tailwind simple mobile-first approach and some simple class naming, I have changed the design to match many devices.

## User interface

Having a design match with project context is one of my approaches in any creative project. I have always done my best to think out of the box and find a way to match the web page design fit with the project's context. I have used some random CSS styles like borders and some flat and frank colors to check with the comic strip styles in this project.

## Screenshots

![Alt text](screenshots/1.png?raw=true)
![Alt text](screenshots/2.png?raw=true)
![Alt text](screenshots/3.png?raw=true)
![Alt text](screenshots/4.png?raw=true)
![Alt text](screenshots/5.png?raw=true)