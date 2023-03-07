import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"
import { SubcategorySaga } from "./SubcategorySaga"
import { BrandSaga } from "./BrandSaga"


export default function* RootSaga() {
    yield all(
        [
            maincategorySaga(),
            SubcategorySaga(),
            BrandSaga(),

        ]
    )
}