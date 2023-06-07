import { GET_PRODUCT_LIST, FAILED_API } from "../ActionTypes/index";
import axios from "axios";

export const GetProductList = () => async (dispatch) => {
  try {
    const ProduclistData = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: ProduclistData.data,
    });
  } catch (error) {
    dispatch({
      type: FAILED_API,
      payload: { data: error.response.data },
    });
  }
};
