import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    let total = 0;
    for(const poet of cart){
        total = total + poet.fans;
    }
    return (
        <div className="poets-add">
            <h5>Poets Added: {cart.length}</h5>
            <h5>Total Fans: {total}</h5>
            <ul>
                 {
                     cart.map(poet => <li>{poet.name}</li>)
                 }
             </ul>
            <button className="btn">Follow Now</button>
        </div>
    );
};

export default Cart;