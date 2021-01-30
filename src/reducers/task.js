import { toastError } from "../helpers/toastHelper";
import * as taskConst from "./../constants/task";

const initialState = {
  listTask: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConst.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case taskConst.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    case taskConst.FETCH_TASK_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask:[],
      };
    default:
      return state;
  }
};

export default reducer;
