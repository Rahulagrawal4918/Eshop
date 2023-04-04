import {takeEvery,put} from "redux-saga/effects"
import { createNewslatterAPI, deleteNewslatterAPI, getNewslatterAPI } from "../Service"
import {ADD_NEWSLATTER,ADD_NEWSLATTER_RED, DELETE_NEWSLATTER, DELETE_NEWSLATTER_RED, GET_NEWSLATTER, GET_NEWSLATTER_RED, UPDATE_NEWSLATTER, UPDATE_NEWSLATTER_RED} from "../Constants"

function* createContactSaga(action){   //executer
    var response = yield createNewslatterAPI(action.payload)
    yield put({type:ADD_NEWSLATTER_RED,data:response})
}
function* getContactSaga(){   //executer
    var response = yield getNewslatterAPI()
    yield put({type:GET_NEWSLATTER_RED,data:response})
}
function* deleteContactSaga(action){   //executer
    yield deleteNewslatterAPI(action.payload)
    yield put({type:DELETE_NEWSLATTER_RED,data:action.payload})
}

export function* ContactSaga(){    //watcher
    yield takeEvery(ADD_NEWSLATTER,createContactSaga)
    yield takeEvery(GET_NEWSLATTER,getContactSaga)
    yield takeEvery(DELETE_NEWSLATTER,deleteContactSaga)
    
}