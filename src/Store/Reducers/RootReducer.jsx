import { combineReducers } from "redux"

import { MaincategoryReducer } from "./MaincategoryReducer"
import { SubcategoryReducer } from "./SubcategoryReducer"
import { BrandReducer } from "./BrandReducer"

export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData: BrandReducer,
})