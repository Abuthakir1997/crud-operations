// import { all, call, takeLatest } from "redux-saga/effects"
// import CountTypes from "./count.types"

// function* modifyValue(action) {
//     action = {
//         ...action,
//         payload: action.payload + 10
//     }
// }


// function* updateValue() {
//     yield takeLatest(CountTypes.UPDATE_VALUE, modifyValue)
// }


// export function* startCountSaga() {
//     yield all([call(updateValue)])
// }