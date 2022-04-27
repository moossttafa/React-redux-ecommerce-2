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

export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
      ); 
      // console.log("category",response.data);
    dispatch({
      type: Types.FETCH_CATEGORIES,
      payload: response.data,
    });
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const filterCategories = (category) => async (dispatch) => {
  let path = category !== "ALL" ? `category/${category}` : "";
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${path}`
    );
    dispatch({
      type: Types.FILTER_CATEGORY,
      payload: response.data,
      category,
    });
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const filterPrice = (sortedItems, sort) => (dispatch) => {
  let products = sortedItems.slice();
  return dispatch({
    type: Types.FILTER_PRICE,
    payload: {
      sort: sort,
      items: products.sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : sort === "latest"
          ? a.id > b.id
            ? 1
            : -1
          : null
      ),
    },
  });
};

export const filterSort = (products, sort) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products?sort=${sort}`
    );
    dispatch({
      type: Types.FILTER_SORT,
      payload: sort === "all" ? products : response.data,
      sort: sort,
    });
  } catch (err) {
    console.log("Err: ", err);
  }
};

