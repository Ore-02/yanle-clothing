import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.component';
import { Outlet, Link } from "react-router-dom";

const CartDropDown = () => {
    const { fadeProp  } = useContext(CartContext)
   

   
    const { cartItems } = useContext(CartContext)
    return (
        <div className={`cart-dropdown-container ${fadeProp.fade}`}>
            
            <div className='cart-items'>
                {
                    cartItems.length ? cartItems.map((item) => (
                        <CartItem key= {item.id}cartItem={item} />))
                        : <span className='cart-content'>EMPTY</span>
                }
            </div>
            <Link to='/checkout'><button className='btn'>
                    Go to Checkout 
                    </button></Link>
        </div>
    )
}

export default CartDropDown;