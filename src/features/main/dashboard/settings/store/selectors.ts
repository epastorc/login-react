import { RootState } from 'RootType';
// import { createSelector } from 'reselect';

export const getFactDog = (state: RootState) => state.factdog.factdogs;
export const isLoading = (state: RootState) => state.factdog.isLoading;
