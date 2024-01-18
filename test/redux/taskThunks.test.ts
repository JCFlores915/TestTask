import { addTaskThunk } from "../../src/redux/actions/taskThunks";
import { addTask } from "../../src/redux/slices/taskSlice";
import { IDataType } from "../../src/redux/interfaces";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { Dispatch } from "@reduxjs/toolkit";

type DispatchExts = ThunkDispatch<{}, void, AnyAction>;
const middlewares = [thunk];
const mockStore = configureMockStore<{}, DispatchExts>();

describe("taskThunks", () => {
  it("dispatches addTask action", async () => {
    const task: IDataType = {
      id: "1",
      name: "Test Task",
      avatar: "avatar.jpg",
    };
    const expectedActions = [{ type: addTask.type, payload: task }];
    const store: MockStoreEnhanced<{}, DispatchExts> = mockStore({
      task: {
        allTasks: [],
      },
      middlewares: (
        getDefaultMiddleware: (arg0: {
          serializableCheck: {
            // Ignore these action types
            ignoredActions: (
              | "persist/FLUSH"
              | "persist/REHYDRATE"
              | "persist/PAUSE"
              | "persist/PERSIST"
              | "persist/PURGE"
              | "persist/REGISTER"
            )[];
          };
        }) => void
      ) => {
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        });
      },
    });
    addTaskThunk(task)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
