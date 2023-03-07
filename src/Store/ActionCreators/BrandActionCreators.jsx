import { ADD_BRAND, DELETE_BRANDADD_BRAND, GET_BRANDADD_BRAND, UPDATE_BRANDADD_BRAND } from "../Constants";

export function addBrand(data){
    return{
        type:ADD_BRAND,
        payload:data
    }
}
export function getBrand(){
    return{
        type:GET_BRANDADD_BRAND
    }
}     
export function updateBrand(data){
    return{
        type:UPDATE_BRANDADD_BRAND,
        payload:data
    }
}
export function deleteBrand(data){
    return{
        type:DELETE_BRANDADD_BRAND,
        payload:data
    }
}