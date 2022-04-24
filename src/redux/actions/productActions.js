import axios from "axios";
import { Types } from "../constants/type"

export const fetchProducts = () => async (dispatch) => {
  try{
    const response = await axios.get(`https://fakestoreapi.com/products`)
    console.log("wwwwwwwwwww",response.data);
    dispatch({
      type : Types.FETCH_PRODUCTS,
      payload : response.data,
    }); 
  }catch(err){
    console.log("error",err);
  };
};