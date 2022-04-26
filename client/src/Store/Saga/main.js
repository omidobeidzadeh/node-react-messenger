import { takeLatest, put, call } from "redux-saga/effects";
import mainActions from "../Actions/mainActions";
import HttpService from "../../Services/HttpService";
const httpService = new HttpService();


const initWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService.post("account/init", action.payload);
    });
    yield put({
      type: mainActions.INIT_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({ type: mainActions.INIT_FAILED, payload: error.response.data });
  }
};
export const initWatcher = function* () {
  yield takeLatest(mainActions.INIT_REQUESTED, initWorker);
};