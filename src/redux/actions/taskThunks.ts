

import { getAllTask, addTask} from "../.";
import { ITask } from "../interfaces";
import { Dispatch } from "redux";



export const addTaskThunk = (task:ITask ) => {
  return async (dispatch: Dispatch) => {
   await  dispatch(addTask(task));
  };
};

