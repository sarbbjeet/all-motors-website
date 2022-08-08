import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    vehicles: [],
    filtered_data: [], //vehicle details
    filterOptionsGroup: {
      //options parameters
      make: [],
      model: [],
      fuel: [],
      colors: [],
      doors: [],
    },
    filterKeySelector: [
      //default key
      { key: "make", value: null },
      { key: "model", value: null },
      { key: "colors", value: null },
      { key: "fuel", value: null },
      { key: "doors", value: null },
    ],
  },
  reducers: {
    vehiclesAdded(state, action) {
      return { ...state, vehicles: action.payload.vehicles };
    },

    filteredVehiclesAdded(state, action) {
      return { ...state, filtered_data: action.payload.vehicles };
    },
    filterOptionsAdded(state, action) {
      return { ...state, filterOptionsGroup: action.payload.optionsGroup };
    },

    changeFilterKey(state, action) {
      const filterKeys = [
        ...state.filterKeySelector.map((item) =>
          item.key == action.payload.key
            ? { ...item, value: action.payload.value }
            : item
        ),
      ];
      return { ...state, filterKeySelector: filterKeys };
    },
  },

  //   extraReducers: {
  //     [HYDRATE]: (state, action) => {
  //       if (!action.payload.vehicles?.length > 0) return state;
  //       state.vehicles = action.payload.vehicles;
  //     },
  //   },
});

export const {
  changeFilterKey,
  vehiclesAdded,
  filteredVehiclesAdded,
  filterOptionsAdded,
} = filtersSlice.actions;
export default filtersSlice.reducer;
