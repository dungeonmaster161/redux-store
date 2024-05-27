import { ADD_ITEM } from "../ActionTypes"

export const addItemToCart=(data)=>({
    type:ADD_ITEM,
    payload:data,
});

export const removeItemFromCart=(index)=>({
    type:ADD_ITEM,
    payload:index,
});
