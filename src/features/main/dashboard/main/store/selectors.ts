import { RootState } from 'RootType';
// import { createSelector } from 'reselect';

export const getFactCat = (state: RootState) => state.factcat.factcats;
export const isLoading = (state: RootState) => state.factcat.isLoading;
