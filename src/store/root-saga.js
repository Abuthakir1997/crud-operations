import { all } from "redux-saga/effects";
import { startCountSaga } from "./user/count.saga";


export default function* rootSaga() {
    yield all([
        startCountSaga()
    ])
}