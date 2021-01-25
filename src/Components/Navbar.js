import React, {useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import "../index.css";
import { connect } from "react-redux";


const Navbar =({cart})=>
{         
     const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
      return(
          <div className="Navbar">
              <div className="home">
                <Link to="/" className="Product">Keep Shoping</Link>
                </div>
                <div className="cart_logo">
                <Link to="/cart" className="cart_title">Cart:{cartCount}</Link>
                </div>
           </div>
       );
    
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

  export default connect(mapStateToProps)(Navbar);
