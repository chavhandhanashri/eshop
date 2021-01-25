import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { adjustItemQty, removeFromCart,
} from "../actions";

const Cart=({cart,adjustItemQty, removeFromCart})=>{
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [input, setInput] = useState(cart.qty);
   
    const onChangeHandler = (e) => {
      setInput(e.target.value);
      adjustItemQty(cart.id, e.target.value);
    };
    
      useEffect(() => {
        let items = 0;
        let price = 0;

         // total price and Total items
    
        cart.forEach((cart) => {
           
          items += cart.qty;
          price += cart.qty * cart.price;
        });
        
    
        setTotalItems(items);
        setTotalPrice(price);
     }, [cart, totalPrice, totalItems,setTotalPrice, setTotalItems]
    );
    
     return(
         <div className="Cart">
             <div className="CartItem">
             {cart.map((item) => (
            <div className="Cartitem">   
            

                <img className="cartimg"
                 src={'https://flymaxindia.stnshops.com'+item.thumbnail}
               alt="Product" />

                     <div className="cartdetails">
                      <p>{item.title}</p>
                      <p>Rs {item.price}</p>
                    
           
                      <div className="action">
                       <div>
                    <label htmlFor="qty">Qty</label>
                    <input min="1" type="number" id="qty" name="qty"
                     value={input} onChange={onChangeHandler} />
                      </div>
                          <button onClick={() => removeFromCart(item.id)} 
                         className="deletbtn"> 
                           Delete
                        </button>
                     </div>
                     </div>
           </div>
               ))}
             </div>
             <div className="summary">
               <h4 >Cart details</h4>
               <div className="details">
                 <span>TOTAL: ({totalItems} items)</span>
                 <span>Rs {totalPrice}</span>
               </div>
              <button className="submit">
                  Proceed 
               </button>
             </div>
         </div>  


   );
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart);




