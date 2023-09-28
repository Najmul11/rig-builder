import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  motherboard: null,
  cpu: null,
  ram: null,
  monitor: null,
  storage: null,
  gpu: null,
};

const pcBuildSlice = createSlice({
  name: "pcBuild",
  initialState,
  reducers: {
    selectMotherboard: (state, action) => {
      state.motherboard = action.payload;
    },
    selectCpu: (state, action) => {
      state.cpu = action.payload;
    },
    selectRam: (state, action) => {
      state.ram = action.payload;
    },
    selectMonitor: (state, action) => {
      state.monitor = action.payload;
    },
    selectStorage: (state, action) => {
      state.storage = action.payload;
    },
    selectGpu: (state, action) => {
      state.gpu = action.payload;
    },
  },
});

export const {
  selectCpu,
  selectGpu,
  selectMonitor,
  selectMotherboard,
  selectRam,
  selectStorage,
} = pcBuildSlice.actions;

export default pcBuildSlice.reducer;
