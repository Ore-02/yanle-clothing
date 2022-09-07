import './checkout.styles.scss'
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckOutItems from '../checkout-items/checkout-items.component';
import Footer from '../../routes/footer/footer';
const CheckOut = () => {
    const { cartItems, totalPrice} = useContext(CartContext)

    
    
    return (
        <>
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
            {  cartItems.length ? cartItems.map((item) => (
                    <CheckOutItems key= {item.id} checkoutItem={item}/>))
                : <span className='empty'>EMPTY</span>
                }
            <div className='total'>Total: ${totalPrice}</div>
        </div>
    <Footer/>
    </>
    )
}

export default CheckOut