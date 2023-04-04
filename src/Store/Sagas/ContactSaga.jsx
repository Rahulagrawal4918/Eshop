import {takeEvery,put} from "redux-saga/effects"
import { createContactAPI, deleteContactAPI, getContactAPI, updateContactAPI } from "../Service"
import {ADD_,ADD__RED, DELETE_, DELETE__RED, GET_, GET__RED, UPDATE_, UPDATE__RED} from "../Constants"

function* createContactSaga(action){   //executer
    var response = yield createContactAPI(action.payload)
    yield put({type:ADD__RED,data:response})
}
function* getContactSaga(){   //executer
    var response = yield getContactAPI()
    yield put({type:GET__RED,data:response})
}
function* deleteContactSaga(action){   //executer
    yield deleteContactAPI(action.payload)
    yield put({type:DELETE__RED,data:action.payload})
}
function* updateContactSaga(action){   //executer
    yield updateContactAPI(action.payload)
    yield put({type:UPDATE__RED,data:action.payload})
}
export function* ContactSaga(){    //watcher
    yield takeEvery(ADD_,createContactSaga)
    yield takeEvery(GET_,getContactSaga)
    yield takeEvery(DELETE_,deleteContactSaga)
    yield takeEvery(UPDATE_,updateContactSaga)
}