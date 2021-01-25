import React, { Component } from 'react';
import { actFetchProductsRequest, addToCart} from '../actions'
import { connect } from 'react-redux';
import "../index.css";

export class Products extends Component
{  
    componentDidMount()
    {
       this.props.actFetchProductsRequest();        
    }
    render()
    {    
         const {Data} = this.props.Data;
         if(Data.length > 0)
          {
            return(
              <div className="ProductList">
               <h2>Products</h2>
                 <div className="product_card">
                  { Data.map((item,i) =>(
                      <div className="card">
                         <div>
                             <img className="image" src={'https://flymaxindia.stnshops.com' + item.thumbnail} alt="Product" />
                          </div>
                          <div className="name">
                              <h3>{item.title}</h3>
                              <h3 className="price">Rs{item.sale_price}</h3>
                              <h5>{item.sale_discount}% </h5>
                               <h3>Rs{item.price}</h3>
                         
                              <button  onClick={() => this.props.addToCart(item.id)}
                              className="btn_add"> add to cart</button>
                          </div>
                      </div>

                  )
                      
                   )
                  }
                   </div>               
              </div>
            )
          }
         return(
             <div>
                 <h3>Loding..!!!</h3>
             </div>
         )
    }
}

const mapStateToProps = state => {
    return {
        Data: state.shop,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    
        addToCart: (id) => dispatch(addToCart(id))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
