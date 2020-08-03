import { RootState } from 'MyTypes';
// import { createSelector } from 'reselect';

export const getUser = (state: RootState) => state.auth.user;
