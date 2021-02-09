import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const REQUEST_HOUSES_SUCCESS = "REQUEST_HOUSES_SUCCESS";

const requestHousesSuccess = createAction(REQUEST_HOUSES_SUCCESS)

export const requestHouses = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:4000/houses");
    const houses = await response.json();
    dispatch(requestHousesSuccess(houses));
  };
};

export const selectHouses = (state) => state.houses

const housesReducer = createReducer([], (builder) => {
  builder
      .addCase(requestHousesSuccess, (state, action) => {
          return [...state, ...action.payload]
      })
});

export const store = configureStore({
  reducer: {
    houses: housesReducer,
  },
});