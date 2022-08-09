import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slice/filtersSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

const combineReducer = combineReducers({
  filters: filtersReducer,
});

//Bind next SSR with redux store
const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    //add server side redux data into client redux
    //  console.log("hydrayte-", action.payload);
    return {
      ...state,
      // filters: {
      //   ...state.filters,
      //   vehicles: action.payload.filters.vehicles,
      // },
      filters: { ...state.filters, vehicles: action.payload.filters?.vehicles },
    };
    //  return { ...state, vehicles: action.payload.filters.vehicles};
  } else {
    return combineReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
