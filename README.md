# :city_sunrise: Weather Now
> A Progessive Web App to show weather forecast with Vue.js 

[![Netlify Status](https://api.netlify.com/api/v1/badges/76a23581-c922-44bb-b700-36a21d33d58e/deploy-status)](https://app.netlify.com/sites/eb-weather-now/deploys)
[![Build Status](https://travis-ci.org/erickbogarin/weather-now.svg?branch=master)](https://travis-ci.org/erickbogarin/weather-now)

Demo site is here: [Weather Now](https://eb-weather-now.netlify.com)

![screenshot of site](/docs/screenshot.png)

# Getting Started

## Prerequisites

You’ll need to have Node 8.10.0 or later on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to easily switch Node versions between different projects.

## Installing

Clone this repo and install it's dependencies.

```
$ git clone https://github.com/erickbogarin/weather-now

# open the folder
$ cd weather-now
$ yarn install or npm install
```

## Running in development mode

```
# serve with hot reload at localhost:3000
$ yarn dev or npm dev
```

## Generating a production build

```
# build for production and launch server
$ yarn build or npm build
$ yarn start or npm start
```

## Features

- Refreshes UI using rxjs
- Cached API Requests via service workers
- Automated Testing
- PWA
- Responsive Design

## Deployment

Check netlify guide to depoly this app from [here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

## Built With

- [Vue.js](https://vuejs.org) - progressive framework for building user interfaces
- [Nuxt.js](https://nuxtjs.org/) - framework for creating Vue.js applications
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [jest](https://jestjs.io/) - JavaScript Testing Framework
- [axios](https://github.com/axios/axios) - Promise based HTTP client
- [Docker](https://www.docker.com/) - container platform

## Improvement opportunities

- Increase Test Coverage (unit, integration, e2e)
- Document UI components
- Remove Dead/Zombie Code

## Questions

Feel free to open any issue.
