import * as taskApi from "./../apis/task";
import * as taskConsts from "./../constants/task";

export const fetchListTask = () => {
    return {
      type: taskConsts.FETCH_TASK,
    };
  };
  export const fetchListTaskSuccess = (data) => {
    return {
      type: taskConsts.FETCH_TASK_SUCCESS,
      payload: {
        data,
      },
    };
  };
  export const fetchListTaskFailed = (error) => {
    return {
      type: taskConsts.FETCH_TASK_FAILED,
      payload: {
        error,
      },
    };
  };
  
export const fetchListTaskRequest = () => {
  return (dispatch) => {
      dispatch(fetchListTask());
    taskApi
      .getList()
      .then((res) => {
        const {data} = res;
        console.log(data);
        dispatch(fetchListTaskSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchListTaskFailed(err));
      });
  };
};

