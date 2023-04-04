import { ADD_CONTACT, DELETE_ADD_CONTACT, GET_ADD_CONTACT, UPDATE_ADD_CONTACT } from "../Constants";

export function addContact(data){
    return{
        type:ADD_CONTACT,
        payload:data
    }
}
export function getContact(){
    return{
        type:GET_ADD_CONTACT
    }
}     
export function updateContact(data){
    return{
        type:UPDATE_ADD_CONTACT,
        payload:data
    }
}
export function deleteContact(data){
    return{
        type:DELETE_ADD_CONTACT,
        payload:data
    }
}