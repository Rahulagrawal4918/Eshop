import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"
import { SubcategorySaga } from "./SubcategorySaga"
import { BrandSaga } from "./BrandSaga"
import { ProductSaga } from "./ProductSaga"
import { UserSaga } from "./UserSaga"
import { CartSaga } from "./CartSaga"
import { WishlistSaga } from "./WishlistSaga"
import { CheckoutSaga } from "./CheckoutSaga"




export default function* RootSaga() {
    yield all(
        [
            maincategorySaga(),
            SubcategorySaga(),
            BrandSaga(),
            ProductSaga(),
            UserSaga(),
            CartSaga(),
            WishlistSaga(),
            CheckoutSaga()
        ]
    )
}