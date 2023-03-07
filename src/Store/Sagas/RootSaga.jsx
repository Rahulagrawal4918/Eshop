import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"
import { SubcategorySaga } from "./SubcategorySaga"


export default function* RootSaga() {
    yield all(
        [
            maincategorySaga(),
            SubcategorySaga(),
           
        ]
    )
}