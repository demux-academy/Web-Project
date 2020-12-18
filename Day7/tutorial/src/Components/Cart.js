import React, {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Cart = ( {items}) => {
  return (
    <div className="container">
      <div className="card">
            <div className="card-body">
                <h5 className="card-title">My Cart</h5>
                {
                    items.map(item=>(
                        <h6>{item.name}</h6>
                    ))
                }
            </div>
      </div>
    </div>
  );
};
export default Cart;
