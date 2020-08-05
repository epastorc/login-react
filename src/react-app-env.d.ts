/// <reference types="react-scripts" />

import { string } from "prop-types"

declare namespace EnvironmentVariables {
    interface FIREBASE {
        REACT_APP_FIREBASE_APIKEY : string
        REACT_APP_FIREBASE_AUTHDOMAIN : string
        REACT_APP_FIREBASE_DATABASEURL : string
        REACT_APP_FIREBASE_PROJECTID : string
        REACT_APP_FIREBASE_STORAGEBUCKET : string
        REACT_APP_FIREBASE_MESSAGINGSENDERID : string
        REACT_APP_FIREBASE_APPID : string
        }
}