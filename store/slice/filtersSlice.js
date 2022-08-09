import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { fCars } from "../../utils/filterOptionsGroup";

const defaultFilterProps = [
  { key: "make", value: null },
  { key: "vehicle_type", value: null },
  { key: "model", value: null },
  { key: "color", value: null },
  { key: "fuel", value: null },
  { key: "doors", value: null },
];

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    vehicles: [],
    filtered_data: [], //vehicle details
    optionsGroup: {
      //options parameters
      make: [],
      model: [],
      fuel: [],
      colors: [],
      doors: [],
    },
    filterKeysValues: defaultFilterProps,
  },
  reducers: {
    vehiclesAdded(state, action) {
      return { ...state, vehicles: action.payload };
    },

    filteredVehiclesAdded(state, action) {
      return { ...state, filtered_data: action.payload };
    },
    filterOptionsAdded(state, action) {
      return { ...state, optionsGroup: action.payload };
    },

    changeFilterKey(state, action) {
      const { key } = action.payload;
      const value =
        action.payload.value === "null" ? null : action.payload.value;

      if (key == "make")
        //all keys value should null
        return {
          ...state,
          filterKeysValues: [
            ...defaultFilterProps.map((obj) =>
              obj.key == key ? { ...obj, value } : obj
            ),
          ],
        };
      return {
        ...state,
        filterKeysValues: [
          ...state.filterKeysValues.map((obj) =>
            obj.key == key ? { ...obj, value } : obj
          ),
        ],
      };
    },
  },

  //   extraReducers: {
  //     [HYDRATE]: (state, action) => {
  //       if (!action.payload.vehicles?.length > 0) return state;
  //       state.vehicles = action.payload.vehicles;
  //     },
  //   },
});

const {
  changeFilterKey,
  vehiclesAdded,
  filteredVehiclesAdded,
  filterOptionsAdded,
} = filtersSlice.actions;

export const applyFilter = () => (dispatch, getState) => {
  const { vehicles, filterKeysValues } = getState().filters;
  dispatch(filterOptionsAdded(fCars(vehicles, filterKeysValues)));
  //apply above filter keys on the vehicles data Arr
  const filteredVehicles = vehicles?.filter((d) => {
    let found = true;
    filterKeysValues?.forEach((c) => {
      if (found && c["value"] != null && d[`${c?.key}`] != c?.value)
        found = false;
    });
    return found;
  });
  dispatch(filteredVehiclesAdded(filteredVehicles));
};

export { changeFilterKey, vehiclesAdded };
export default filtersSlice.reducer;
