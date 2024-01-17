import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../interfaces";


const initialState: IInitialState = {
  allTasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getAllTask: (state, { payload }) => {
      state.allTasks = payload;
    },
    addTask: (state, { payload }) => {
      state.allTasks.push(payload);
    }
  },
});

export const {getAllTask, addTask} = taskSlice.actions;
