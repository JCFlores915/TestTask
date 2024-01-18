import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../interfaces";


const initialState: IInitialState = {
  allTasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.allTasks.push(payload);
    }
  },
});

export const {addTask} = taskSlice.actions;
