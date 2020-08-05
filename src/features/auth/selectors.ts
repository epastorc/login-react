import { RootState } from 'RootType';
// import { createSelector } from 'reselect';

export const getUser = (state: RootState) => state.auth.user;
export const isSignedIn = (state: RootState) => Object.keys(state.auth.user).length > 0;
export const getToken = (state: RootState) => state.auth.token;
