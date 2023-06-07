import { ADD_TO_CART } from '../ActionTypes/index'
export const addToProductCart = (item) => async (dispatch) => {
    dispatch( {
        type: ADD_TO_CART,
        payload : item
    })
}