import { takeLatest, put, call } from "redux-saga/effects";
import userActions from "../Actions/userActions";
import HttpService from "../../Services/HttpService";
const httpService = new HttpService();

const userRegisterWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService
        .post("auth/register", action.payload)
    });
    yield put({type: userActions.USER_REGISTER_SUCCESS, payload: result.data})
  } catch (error) {
      yield put({type: userActions.USER_REGISTER_FAILED, payload: error})
  }
};
export const userRegisterWatcher = function* () {
  yield takeLatest(userActions.USER_REGISTER, userRegisterWorker);
};

const userLoginWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService.post("auth/login", action.payload);
    });
    yield put({
      type: userActions.USER_LOGIN_SUCCESS,
      payload: result.data,
    });
    yield call(() => {
      localStorage.setItem('token', result.data.token)
    })
  } catch (error) {
    yield put({ type: userActions.USER_LOGIN_FAILED, payload: error.response.data });
  }
};
export const userLoginWatcher = function* () {
  yield takeLatest(userActions.USER_LOGIN, userLoginWorker);
};