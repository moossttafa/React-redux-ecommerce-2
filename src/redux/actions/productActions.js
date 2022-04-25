import axios from "axios";
import { Types } from "../constants/type"

export const fetchProducts = () => async (dispatch) => {
  try{
    const response = await axios.get(`https://fakestoreapi.com/products`) 
    dispatch({
      type : Types.FETCH_PRODUCTS,
      payload : response.data,
    }); 
  }catch(err){
    console.log("error",err);
  };
};

export const selectedProductActions = (id) => async (dispatch) => {
  try{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch({
      type : Types.SELECTED_PRODUCT,
      payload : response.data
    });
  }catch(err){
    console.log("Err: ", err);
  };
}