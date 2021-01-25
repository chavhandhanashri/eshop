import callApi from '../Api';

export const GET_DATA='GET_DATA';
export const ADD_TO_CART='ADD_TO_CART';
export const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/products', 'GET', null).then(res => {

            dispatch(GetAllProduct(res.data));
        });
    }
}

// GET_PRODUCT

export function GetAllProduct(payload){
    return {
        type:'GET_DATA',
        payload
    }
}
//ADD_TO_CART
export const addToCart = (itemID) => {
    return {
      type: 'ADD_TO_CART',
      payload: {
        id: itemID,
      },
    };
  };
  
  //REMOVE_FROM_CART
  export const removeFromCart = (itemID) => {
    return {
      type:'REMOVE_FROM_CART',
      payload: {
        id: itemID,
      },
    };
  };
  
  //  ADJUST_ITEM_QTY
  export const adjustItemQty = (itemID, qty) => {
    return {
      type: 'ADJUST_ITEM_QTY',
      payload: {
        id: itemID,
        qty,
      },
    };
  };