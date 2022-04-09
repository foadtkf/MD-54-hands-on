import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let cart=props.cart
    let handleRemovefromCart=props.handleRemovefromCart
let command
if(cart.length ===0){
command=<p>Please Add some items</p>
}
else if(cart.length===1){
    command=<p><small>Want to add more?</small></p>
}
else{
    command=<p><small>Thanks for adding</small></p>
}
    return (
        <div>
            <h2>Items selected: {cart.length}</h2>
            {
                cart.map(tshirt=><p>{tshirt.name}<button onClick={()=>handleRemovefromCart(tshirt)}>X</button></p>
                )
            }
            {command}
            {
                cart.length!==4 ? <p>Keep adding</p>:<button>remove all</button>
            }
        </div>
    );
};

export default Cart;