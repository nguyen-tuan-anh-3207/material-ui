import { fork, take, call, put, delay } from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { STATUS_CODE } from "./../constants/index";
import { getList } from "./../apis/task";
import { fetchListTaskFailed, fetchListTaskSuccess } from "../actions/task";
import {hideLoading, showLoading} from './../actions/ui';
// b1: thực thi action fetch task
// b2: gọi api -> hiển thị thanh tiến trình
//b3: kiểm tra status code:
// nếu thành công...
//nếu thất bại...
// tắt loadingggg...
//thực hiên nhiệm vụ khác
function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK); 
    yield put(showLoading());
    //block
    const res = yield call(getList); // call chỉ disspatch được 1 lần duy nhất, nên fix bằng cách thêm while loop để khiến lúc nào cũng phải chạy
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fecthListTaskSuccess
      yield put(fetchListTaskSuccess(data));
    } else {
      // dispatch action fetchListTaskFailed
      yield put(fetchListTaskFailed(data));
    };
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  console.log("watch list action");
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
