import React from 'react';
import './Tshirts.css'
const Tshirts = (props) => {
    const {picture,name,gender,price}=props.tshirt
    const handleAddtoCart=props.handleAddtoCart
    return (
        <div >
        <img src={picture} alt=''></img>
            <h3>{name}</h3>
            <p>for {gender}</p>
            <h6>Price: ${price}</h6>
            <button onClick={()=>handleAddtoCart(props.tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirts;