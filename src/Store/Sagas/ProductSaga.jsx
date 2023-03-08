import {takeEvery,put} from "redux-saga/effects"
import { createProductdAPI, deleteProductdAPI, getProductdAPI, updateProductdAPI } from "../Service"
import {ADD_PRODUCT,ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED} from "../Constants"

function* createProductSaga(action){   //executer
    var response = yield createProductdAPI(action.payload)
    yield put({type:ADD_PRODUCT_RED,data:response})
}
function* getProductSaga(){   //executer
    var response = yield getProductdAPI()
    yield put({type:GET_PRODUCT_RED,data:response})
}
function* deleteProductSaga(action){   //executer
    yield deleteProductdAPI(action.payload)
    yield put({type:DELETE_PRODUCT_RED,data:action.payload})
}
function* updateProductSaga(action){   //executer
    yield updateProductdAPI(action.payload)
    yield put({type:UPDATE_PRODUCT_RED,data:action.payload})
}
export function* ProductSaga(){    //watcher
    yield takeEvery(ADD_PRODUCT,createProductSaga)
    yield takeEvery(GET_PRODUCT,getProductSaga)
    yield takeEvery(DELETE_PRODUCT,deleteProductSaga)
    yield takeEvery(UPDATE_PRODUCT,updateProductSaga)
}