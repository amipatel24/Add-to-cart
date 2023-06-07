import {GET_PRODUCT_LIST, FAILED_API} from "../ActionTypes/index"
const initialstate = {
    producList :[]
}
const  ProductListDataReducer = (state = initialstate,action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return{
                ...state,
                producList:action.payload
            }
    
        default:
            return state
    }
}
export default ProductListDataReducer