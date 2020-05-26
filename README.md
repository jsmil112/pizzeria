# Pizzeria

A mock e-store for a Pizza delivery company created with a 1 week time constraint. The app uses the repo "pizzeriaAPI" for all server requests. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies:

* Axios 0.19.2
* Cypress 4.6.0
* Prop-Types 15.7.2
* React 16.13.1
* React-DOM 16.13.1
* React-Redux 7.2.0
* React-Router 5.2.0
* React-Router-DOM 5.2.0
* React-Router-Last-Location 2.0.1
* React-Scripts 3.4.1
* Redux 4.0.5
* Redux-Thunk 2.3.0
* Serve 11.3.0
* Styled-Components 5.1.0

## To start dev server

    npm run dev

## To run production server

    npm run build
    npm start

## To open test suite

    npx cypress open

## Notes

The default create-react-app scripts have been overwritten as the latest version of react-scripts is creating problems when deploying to Heroku. It tries to run the development server instead of the production. This is why "npm run dev" runs the development server and "npm start" serves the production build. 
