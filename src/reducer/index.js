import { combineReducers } from 'redux';
import {GET_DATA, ADD_TO_CART,REMOVE_FROM_CART,ADJUST_ITEM_QTY} from "../actions";

const STATE={
    Data: [],
    cart: []
}

function shopping(state=STATE ,action)
{
    switch(action.type)
    {
        case GET_DATA:
            return{
                ...state,
               Data:action.payload
            }
        case ADD_TO_CART:
           // Get Item data from Data array
           const item = state.Data.find(
            (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
              item.id === action.payload.id ? true : false
                );
          
          return {
                  ...state,
                  cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                          ? { ...item, qty: item.qty + 1 }
                          : item
                      )
                    : [...state.cart, { ...item, qty: 1 }],
                }; 
         case REMOVE_FROM_CART:
             return {
                      ...state,
                      cart: state.cart.filter((item) => item.id !== action.payload.id),
                    };  
            
         case ADJUST_ITEM_QTY:
            return {
                     ...state,
                      cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: +action.payload.qty }
                            : item
                          ),
                   };                       
        default:
            return state;
              
    }
}

const rootReducer = combineReducers({
    shop: shopping
});
export default rootReducer;