import { combineReducers } from "redux"

import { MaincategoryReducer } from "./MaincategoryReducer"

export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
})