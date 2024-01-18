

import { addTask} from "../.";
import { IDataType } from "../interfaces";
import { Dispatch } from "redux";



export const addTaskThunk = (task: IDataType ) => {
  return async (dispatch: Dispatch) => {
   await  dispatch(addTask(task));
  };
};

