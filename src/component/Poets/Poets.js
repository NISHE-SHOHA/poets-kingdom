import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Poets.css';
import Poet from '../Poet/Poet';

const Poets = () => {
    const [poetsData, setPoetsData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./poets.Json')
        .then(res => res.json())
        .then(data =>setPoetsData(data))
    }, [])

    const handleAddToCart = (poet) => {
        const newCart = [...cart, poet];
        setCart(newCart);
    }


    return (
        <div className="poets-container">
            <div className="poets">
            {
             poetsData.map(poet => <Poet
                key={poet.name} 
                handleAddToCart={handleAddToCart} 
                poet={poet}
                ></Poet>)   
            }
            </div>
            <div className="cart">
                <Cart 
                key={cart.name}
                cart={cart}
                ></Cart>
            </div>
            
        </div>
    );
};

export default Poets;