import { combineReducers } from "redux"

import { MaincategoryReducer } from "./MaincategoryReducer"
import { SubcategoryReducer } from "./SubcategoryReducer"

export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
})