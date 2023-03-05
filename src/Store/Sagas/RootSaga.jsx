import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"


export default function* RootSaga() {
    yield all(
        [
            maincategorySaga(),
           
        ]
    )
}