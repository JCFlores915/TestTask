
import { combineReducers } from "redux";

import { taskSlice } from "../redux/slices/taskSlice";

//Combine all reducers

const rootReducer = combineReducers({
    task: taskSlice.reducer,
})

export default rootReducer;