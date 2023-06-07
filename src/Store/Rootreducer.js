import { combineReducers} from "redux";
import ProductListDataReducer from './Reducer/ProductListreducer'
import CartReducer from "./Reducer/CartReducer"
const RootReducer = combineReducers({
    product : ProductListDataReducer,
    cart:CartReducer
})
export default RootReducer