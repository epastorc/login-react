## Installation and Setup

- Node version: 10.13.0 or other compatibles
- Install the node dependencies
- Add firebase environment variables
```shell
REACT_APP_FIREBASE_APIKEY
REACT_APP_FIREBASE_AUTHDOMAIN
REACT_APP_FIREBASE_DATABASEURL
REACT_APP_FIREBASE_PROJECTID
REACT_APP_FIREBASE_STORAGEBUCKET 
REACT_APP_FIREBASE_MESSAGINGSENDERID
REACT_APP_FIREBASE_APPID
```
-  Run -> npm run start

## Clone

- Clone this repo to your local machine using `https://github.com/epastorc/login-react/`

## Features
- Login
    - The user can log in with a username and password. The app uses firebase user/password login. For the moment, there is only one user (test@prueba.com/1234Test).
    If the user has been logged before, the application automatically redirects to the dashboard.
- DashBoard
    - The view is private. It only can be accessed if the user is logged. The view shows a list of the fact about cats. This information is requested to an API.
- Settings
    - The view is private. It only can be accessed if the user is logged. The view shows a list of the fact about dogs. This information is requested to an API.
## Documentation
### Structure
    -src/
    -- components -> Contains the generic GuardRoute (This layer only should contain stateless components that are used by app or several features)
    -- features -> Implementation of the use cases (state, actions, reducers, component(visual components), page(page controller) and types)
    -- layout -> Contains the layout that is used in the dashboard page with the navbar.
    -- service -> It is the infrastructure layer() api, login, localstorage services, etc.)
    -- store -> The configuration of the root state.
    -- Route.tsx -> Route component
    -- router-paths.ts -> get the string path of each route.(For instance : home -> '/') 
   
The structure is based on this repository (https://github.com/piotrwitek/react-redux-typescript-realworld-app)


